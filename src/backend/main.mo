import List "mo:core/List";
import Time "mo:core/Time";

actor {
  // Contact Submission Type
  type ContactSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    company : Text;
    message : Text;
    timestamp : Time.Time;
  };

  // Newsletter Subscriber Type
  type NewsletterSubscriber = {
    email : Text;
    timestamp : Time.Time;
  };

  var nextId = 0;
  let contactSubmissions = List.empty<ContactSubmission>();
  let newsletterSubscribers = List.empty<NewsletterSubscriber>();

  // Add new contact submission
  public shared ({ caller }) func addContactSubmission(name : Text, email : Text, company : Text, message : Text) : async Nat {
    let submission : ContactSubmission = {
      id = nextId;
      name;
      email;
      company;
      message;
      timestamp = Time.now();
    };

    contactSubmissions.add(submission);
    nextId += 1;
    submission.id;
  };

  // Get all contact submissions
  public query ({ caller }) func getAllContactSubmissions() : async [ContactSubmission] {
    contactSubmissions.toArray();
  };

  // Add newsletter subscriber
  public shared ({ caller }) func addNewsletterSubscriber(email : Text) : async () {
    let subscriber : NewsletterSubscriber = {
      email;
      timestamp = Time.now();
    };

    newsletterSubscribers.add(subscriber);
  };

  // Get all newsletter subscribers
  public query ({ caller }) func getAllNewsletterSubscribers() : async [NewsletterSubscriber] {
    newsletterSubscribers.toArray();
  };
};
