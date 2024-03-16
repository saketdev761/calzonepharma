const stats = [
  { label: "Transactions every 24 hours", value: "44 million" },
  { label: "Assets under holding", value: "$119 trillion" },
  { label: "New users annually", value: "46,000" },
];

export default function Example() {
  return (
    <div className="bg-gray-50 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Know about us
          </h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl leading-8 text-gray-600">
                Calzone Pharmaceuticals LLP is a licensed pharmaceuticals
                company specialized in distribution marketing of high standard
                products including prescription, over the counter (OTC)
                products, food supplements and natural health products. Since
                its foundation in 2020, Calzone Pharmaceuticals has focused on
                bringing the world&apos;s best healthcare products and
                registered a significant growth in business focusing on becoming
                as one of the most successful pharmaceutical firm.
              </p>
              <p className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                We aim to attain market leadership and cope with changing market
                trends in a competitive way towards enriching people&apos;s
                life. Calzone Pharmaceuticals situated in India with nationwide
                distribution network across major cities of India, The company
                customers include hospitals, pharmacies and government tenders.
                We are able to provide our partners by the highest ethical
                standard operations.
              </p>
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="w-64 space-y-8 xl:w-80">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col-reverse gap-y-4"
                  >
                    <dt className="text-base leading-7 text-gray-600">
                      {stat.label}
                    </dt>
                    <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
