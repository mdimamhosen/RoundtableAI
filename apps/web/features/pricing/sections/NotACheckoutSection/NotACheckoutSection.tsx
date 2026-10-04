import { CheckoutTitle } from "./CheckoutTitle";
import { CheckoutCopy } from "./CheckoutCopy";
import { CheckoutAccount } from "./CheckoutAccount";
import { CheckoutDemo } from "./CheckoutDemo";
import { Container } from "@/components/ui/Container";

export function NotACheckoutSection() {
  return (
    <section className="border-t border-line">
      <Container>
        <div className="py-14">
          <div className="max-w-xl">            <CheckoutTitle />
            <CheckoutCopy /></div>
          <div className="mt-8 border-l border-accent pl-5">            <CheckoutAccount />
            <CheckoutDemo /></div>
        </div>
      </Container>
    </section>
  );
}
