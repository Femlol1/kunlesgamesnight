// pages/faq.js
import Collapsible from '@/components/shared/Collapsible';

export default function FAQ() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h1>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold">General Questions</h2>
                <Collapsible label="Can I come alone?">
                    <p>Absolutely! You are more than welcome to attend our event solo. Many of our participants come alone, and it’s a great opportunity to meet new people and enjoy the experience independently. We look forward to having you join us!</p>
                </Collapsible>
                <Collapsible label="What is your refund policy?">
                    <p>Our refund policy is straightforward: full refunds are available until 1 day before an event. We are unable to offer refunds once within the 1 day window.</p>
                </Collapsible>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Contact Us</h2>
                <p>If you need to reach us, please email kunle@kunlesgamesnight.com. We look forward to hearing from you!</p>
            </section>

            
        </div>
    );
}
