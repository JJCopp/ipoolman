import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Highly accurate test results",
    description:
      "Stop using guess strips. Our testing is calibrated and easily kept track of.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Stop paying for quick labor",
    description:
      "Does it bother you when your pool man is only there for 15 minutes? We eliminate the labor portion of your maintenance fees.",
    icon: ArrowPathIcon,
  },
  {
    name: "Feauture 3",
    description:
      "We only offer you exactly what you need. You dont even have to buy from us.",
    icon: LockClosedIcon,
  },
  {
    name: "Dont leave your house",
    description:
      "Send your sample through the mail on your time and frequency. Get your results emailed and supplies shipped to your door.",
    icon: FingerPrintIcon,
  },
];

export default function Example() {
  return (
    <div className="bg-white md:pt-24 sm:pt-32 md:pb-48 sm:pb-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Maintain your pool in the easiest way possible.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            All you have to do is scrub your pool once a week and mail a water
            sample in our water proof envelopes.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div
          aria-hidden="true"
          className="absolute max-w-6xl inset-x-2 top-[calc(100%-10rem)] -z-11  transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-1rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#61a0ff] to-[#0051ff] opacity-40 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
