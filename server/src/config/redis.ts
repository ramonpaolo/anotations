import Redis from 'ioredis';

export default class Cache {
    public client;
    constructor() {
        this.client = new Redis({
            host: 'redis',
            port: 6379,
        });
    }

    public async getValue(key: string): Promise<string | null> {
        const data = await this.client.get(key);
        return data ? await JSON.parse(data) : null;
    }

    public async setValue(
        key: string,
        value: string | number | object | boolean
    ): Promise<string | null> {
        const expirationInOneHour = 60 * 60;
        await this.client.setex(
            key,
            expirationInOneHour,
            JSON.stringify(value)
        );
        return await this.getValue(key);
    }
}