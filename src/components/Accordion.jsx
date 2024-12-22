
const Accordion = () => {
    return (
        <div className="grid gap-4 w-11/12 mx-auto">
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">What type of cuisine does the restaurant offer?</div>
                <div className="collapse-content">
                    <p>We specialize in a diverse menu, offering a fusion of traditional and modern dishes, including fresh seafood, flavorful steaks, and vegetarian options.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">Do you accommodate dietary restrictions?</div>
                <div className="collapse-content">
                    <p>Yes, we offer gluten-free, vegan, and allergy-friendly options. Let our staff know, and we’ll tailor your meal to your needs.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">Do you take reservations?</div>
                <div className="collapse-content">
                    <p>Absolutely! You can reserve a table online or call us directly. Walk-ins are also welcome, but reservations ensure a seamless experience.</p>
                </div>
            </div>
        </div>
    );
};

export default Accordion;