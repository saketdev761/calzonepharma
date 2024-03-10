import {
  ChatBubbleLeftRightIcon,
  PhoneArrowUpRightIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
export default function Contact() {
  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <img
          className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
          alt=""
        />
      </div>
      <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Contact Us
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Proin volutpat consequat porttitor cras nullam gravida at orci
              molestie a eu arcu sed ut tincidunt magna.
            </p>
            <div className="mx-auto mt-20 max-w-lg space-y-16">
              <div className="flex gap-x-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                  <ChatBubbleLeftRightIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold leading-7 text-gray-900">
                    Email Here
                  </h3>
                  <p className="mt-2 leading-7 text-gray-600">
                    info@cazolepharmaceuticals.com
                  </p>
                  <p className="mt-4">
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-indigo-600"
                    >
                      Location Here <span aria-hidden="true">&rarr;</span>
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex gap-x-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                  <PhoneArrowUpRightIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold leading-7 text-gray-900">
                    Call Here
                  </h3>
                  <p className="mt-2 leading-7 text-gray-600">+91 9506606883</p>
                  <p className="mt-4">
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-indigo-600"
                    >
                      Report a bug <span aria-hidden="true">&rarr;</span>
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex gap-x-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                  <MapPinIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold leading-7 text-gray-900">
                    Location Here
                  </h3>
                  <p className="mt-2 leading-7 text-gray-600">
                    401, Tower 1, JM Park Saphire, Ramprastha Greens Setor-9,
                    Vaisali, Ghaziyabad-201010, Uttar Pradesh(India)
                  </p>
                  <p className="mt-4">
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-indigo-600"
                    >
                      Join our Discord <span aria-hidden="true">&rarr;</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
