import { Banner, Badge, Bleed, Box, Button, Card, Grid, Icon, Text, InlineStack, BlockStack } from "@shopify/polaris";
import React from "react";
import { CartIcon, CalendarIcon } from "@shopify/polaris-icons";
import { useState } from "react";

export function Availability({ showBookCall }) {
  const [dismissed, setDismissed] = useState(false);

  return (
    <>
      {dismissed ? null : (
        <Card>
          <BlockStack gap="300">
            <Bleed marginBlockStart="400" marginInline="400">
              <Box background="bg-surface-secondary" padding="400">
                <InlineStack as="span" align="start" gap="200">
                  <Icon source={CalendarIcon} as="span" />
                  <Text as="h2" variant="headingMd">
                    My current availability
                  </Text>
                </InlineStack>
              </Box>
            </Bleed>

            <Text as="p" variant="bodyLg">
              You can prepay by selecting a package or feel free to reach out with any questions. I look forward to
              chatting!
            </Text>
            <span>
              <Badge tone="info">Available Now!</Badge>
            </span>
            <InlineStack as="span" align="start" gap="200">
              <Button as="span" url="/calendar">
                Book a call
              </Button>
              <Button as="span" url="mailto:hey@flow-helper.com" target="_blank">
                Email me
              </Button>
            </InlineStack>
          </BlockStack>
        </Card>
      )}
    </>
  );
}

export default Availability;
