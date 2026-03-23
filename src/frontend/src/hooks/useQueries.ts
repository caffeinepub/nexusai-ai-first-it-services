import { useMutation, useQuery } from "@tanstack/react-query";
import type { ContactSubmission, NewsletterSubscriber } from "../backend.d";
import { useActor } from "./useActor";

export function useContactSubmissions() {
  const { actor, isFetching } = useActor();
  return useQuery<ContactSubmission[]>({
    queryKey: ["contactSubmissions"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllContactSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useNewsletterSubscribers() {
  const { actor, isFetching } = useActor();
  return useQuery<NewsletterSubscriber[]>({
    queryKey: ["newsletterSubscribers"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllNewsletterSubscribers();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAddContactSubmission() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      company: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.addContactSubmission(
        data.name,
        data.email,
        data.company,
        data.message,
      );
    },
  });
}
