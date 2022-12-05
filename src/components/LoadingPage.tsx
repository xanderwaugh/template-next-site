import React from "react";

import { VscLoading } from "react-icons/vsc";

const LoadingPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen">
      <VscLoading
        size={96}
        className="animate-spin absolute top-[50%] left-[50%]"
      />
    </div>
  );
};

export { LoadingPage };
