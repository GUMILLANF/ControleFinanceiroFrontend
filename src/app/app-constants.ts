export class AppConstants {
  public static get baseServidor(): string {
    return 'http://localhost:8000';
  }

  public static get baseUser(): string {
    return this.baseServidor + '/users';
  }

  public static get baseTitle(): string {
    return this.baseServidor + '/pr';
  }

  public static get baseCategory(): string {
    return this.baseServidor + '/categories';
  }

  public static get baseAccount(): string {
    return this.baseServidor + '/accounts';
  }
}
