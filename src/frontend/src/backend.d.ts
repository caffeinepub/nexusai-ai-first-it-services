import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface NewsletterSubscriber {
    email: string;
    timestamp: Time;
}
export type Time = bigint;
export interface ContactSubmission {
    id: bigint;
    name: string;
    email: string;
    company: string;
    message: string;
    timestamp: Time;
}
export interface backendInterface {
    addContactSubmission(name: string, email: string, company: string, message: string): Promise<bigint>;
    addNewsletterSubscriber(email: string): Promise<void>;
    getAllContactSubmissions(): Promise<Array<ContactSubmission>>;
    getAllNewsletterSubscribers(): Promise<Array<NewsletterSubscriber>>;
}
