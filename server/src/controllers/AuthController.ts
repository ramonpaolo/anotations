export default class LoginUserController {
  public async loginUser(): Promise<string>{
    return ''
  }
  public async updateUser(): Promise<string>{
    return ''
  }
  public async deleteUser(): Promise<string>{
    return ''
  }
}

class VerifyUserController {
  private verifyEmail(email: string): boolean {
    return true;
  }
  private verifyName(email: string): boolean {
    return true;
  }
  private verifyPassword(email: string): boolean {
    return true;
  }

  private async verifyDatas(email: string, password: string, name: string) {
    const emailIsOk = false,
      nameIsOk = false,
      passwordIsOk = false;
  }
}