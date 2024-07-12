import {
  Badge,
  Bleed,
  Card,
  IndexTable,
  InlineStack,
  Link,
  useIndexResourceState,
  SkeletonBodyText,
  Text,
} from "@shopify/polaris";

import { api } from "../api";
import { useFindMany } from "@gadgetinc/react";

export default function Index() {
  const [{ data, fetching, error }] = useFindMany(api.template);

  return (
    <div>
      fetching: {fetching}
      data: {JSON.stringify(data)}
    </div>
  );
}
