export type ErrorSeverity = 'error' | 'warning' | 'info';

export interface IError {
    severity: ErrorSeverity;
    message: string;
    causeeBy?: string;
}