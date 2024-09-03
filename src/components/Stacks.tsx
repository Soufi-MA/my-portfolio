import { getDictionary } from "@/app/[lang]/dictionaries";
import { HashIcon } from "lucide-react";

const Stacks = ({
  dict,
  lang,
}: {
  dict: Awaited<ReturnType<typeof getDictionary>>;
  lang: "ar" | "en";
}) => {
  return (
    <section
      dir={lang === "ar" ? "rtl" : "ltr"}
      id="stacks"
      className="flex flex-col gap-1"
    >
      <a href="#stacks" className="flex gap-1 items-center font-bold">
        {dict.headers.stacks}{" "}
        <span>
          <HashIcon size={16} />
        </span>
      </a>
      <div className={"flex flex-wrap gap-2"}>
        {/* {dict.stacks.map((stack) => {
          const color = stack.color;
          return (
            <div
              key={stack.id}
              className={`flex gap-1 p-2 border rounded-md items-center cursor-pointer text-lg font-semibold hover:text-${color}-500 hover:shadow-custom hover:shadow-${color}-500 transition-all duration-300`}
            >
              <stack.icon size={18} />
              <p className="select-none">{stack.name}</p>
            </div>
          );
        })} */}
      </div>
    </section>
  );
};

export default Stacks;
