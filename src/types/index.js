
export interface IAuthStore {
    email: string;
    clearStore(): void;
    setEmail(email: string): void;
}
