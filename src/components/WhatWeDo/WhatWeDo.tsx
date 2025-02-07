import WhatWeDoTile from "./WhatWeDoTile";

const WhatWeDo = () => {
  return (
    <div className="p-20">
      {/* header */}
      <div className="text-4xl font-bold">What we can help you with ...</div>
      <div className="grid grid-cols-3 gap-4">
        <WhatWeDoTile
          number="01"
          title="Workflow Automation"
          body="We design custom automation solutions that eliminate repetitive tasks, enhance efficiency, and optimize workflows. Whether it’s automating approvals, syncing data, or integrating third-party tools, we ensure your operations run smarter and faster."
        />
        <WhatWeDoTile
          number="02"
          title="Seamless System Integration"
          body="Our team specializes in connecting disparate systems, enabling smooth data flow and real-time synchronization. From CRM and ERP integrations to API development, we ensure your platforms work together effortlessly to enhance productivity."
        />
        <WhatWeDoTile
          number="03"
          title="Data Management & Migration"
          body="We handle complex data operations with precision—whether it’s migrating users, syncing databases, or extending system functionalities. Our expertise ensures secure, accurate, and scalable data management tailored to your needs."
        />
      </div>
    </div>
  );
};

export default WhatWeDo;
