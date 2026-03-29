function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = '',
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 px-4 py-20 lg:px-8 ${className}`}
    >
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || description) && (
          <div className="mb-12 max-w-3xl">
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary-blue">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold text-text-main sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base leading-7 text-text-main/75">
                {description}
              </p>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  )
}

export default Section
