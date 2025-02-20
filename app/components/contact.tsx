export default function Contact() {
    return (
        <section>
            <h1 className="mb-8 mt-14 text-3xl font-medium tracking-tight underline decoration-2 underline-offset-8 text-center md:text-left">
                Have an idea? Let's make it happen!
            </h1>

            <div className="prose prose-bold prose-lg dark:prose-invert space-y-1 text-center md:text-left ">
                <p
                    style={{
                        marginBottom: "0px",
                    }}
                >
                    Email me at{" "}
                    <a
                        href="mailto:wahaabm4@gmail.com"
                        rel="noopener noreferrer"
                    >
                        wahaabm4@gmail.com
                    </a>
                </p>
                <p
                    style={{
                        marginBottom: "0px",
                    }}
                >
                    <a
                        href="https://cal.com/wahabm"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Arrange a meeting with me
                    </a>
                </p>
            </div>
        </section>
    );
}
