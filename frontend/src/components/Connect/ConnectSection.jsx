import ContactItem from './ContactItem';
import { contacts } from '../../data/portfolio';

export default function ConnectSection() {
    return (
        <section className="px-4 md:px-10 py-4 md:py-6 bg-transparent relative">
            <div className="relative px-4 sm:px-8 md:px-12 py-12 md:py-20
                          bg-gray-300/40 backdrop-blur-2xl
                          rounded-xl border border-gray-300/40
                          shadow-2xl shadow-gray-900/5
                          max-w-7xl mx-auto">

                <div className="text-center mb-10 md:mb-14">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
                        Let's Work Together
                    </h1>
                    <p className="text-gray-500 text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto">
                        Have a role, project or idea in mind? Reach out on any of these.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto">
                    {contacts.map((contact) => (
                        <ContactItem key={contact.title} {...contact} />
                    ))}
                </div>
            </div>
        </section>
    );
}
