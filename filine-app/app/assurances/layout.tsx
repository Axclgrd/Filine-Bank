export default function CartePage({
                                      children,
                                  }: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <div>
                {children}
            </div>
        </section>
    );
}
