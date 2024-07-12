import {
  Badge,
  Bleed,
  Card,
  IndexTable,
  InlineStack,
  useIndexResourceState,
  SkeletonBodyText,
  Text,
} from "@shopify/polaris";
import React from "react";
import { api } from "../api";
import { useFindMany } from "@gadgetinc/react";

export function Table() {
  const [{ data, fetching, error }] = useFindMany(api.template, {
    filter: {
      tags: {
        matches: "Mechanic",
      },
    },
  });

  function toneForTag(tag) {
    if (tag == "MESA") {
      return "info";
    } else if (tag == "Shopify") {
      return "success";
    }
  }

  const resourceName = {
    singular: "task",
    plural: "tasks",
  };

  const { selectedResources, allResourcesSelected, handleSelectionChange } = useIndexResourceState(data);

  if (fetching) {
    return (
      <Card>
        <SkeletonBodyText />
      </Card>
    );
  }

  return (
    <Card>
      <Bleed marginInline="400" marginBlock="400">
        <IndexTable
          resourceName={resourceName}
          itemCount={data.length}
          hasZebraStriping={true}
          increasedTableDensity={true}
          selectedItemsCount={allResourcesSelected ? "All" : selectedResources.length}
          onSelectionChange={handleSelectionChange}
          headings={[{ title: "Tasks I've built" }, { title: "Platforms" }]}
        >
          {!fetching &&
            data.map((template) => (
              <IndexTable.Row
                id={template.id}
                key={template.id}
                selected={selectedResources.includes(template.id)}
                position="1"
              >
                <IndexTable.Cell>
                  <Text variant="bodyMd">{template.name}</Text>
                  <Text variant="bodyMd" tone="subdued">
                    {template.description}
                  </Text>
                </IndexTable.Cell>
                <IndexTable.Cell>
                  <InlineStack gap="100">
                    {template.tags.map((tag) => (
                      <Badge tone={toneForTag(tag)}>{tag}</Badge>
                    ))}
                  </InlineStack>
                </IndexTable.Cell>
              </IndexTable.Row>
            ))}
        </IndexTable>
      </Bleed>
    </Card>
  );
}
