import React from "react";
import CardFeatures from "./CardFeatures";
import { Text } from "../atoms";

const Features = () => {
  return (
    <section className="h-full py-4" id="fitur">
      <div>
        <Text className="mx-auto" type="subtitle" text="Fitur MINDES" />
        <CardFeatures />
      </div>
    </section>
  );
};

export default Features;
