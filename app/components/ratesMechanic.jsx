import {
  Badge,
  Bleed,
  Box,
  Icon,
  Button,
  Grid,
  Card,
  Text,
  InlineStack,
  BlockStack,
  InlineGrid,
} from "@shopify/polaris";
import React from "react";
import { CartIcon, CalendarIcon, PaymentIcon } from "@shopify/polaris-icons";

export function Rates({ showButtons }) {
  return (
    <>
      <Card>
        <BlockStack gap="300">
          <Bleed marginBlockStart="400" marginInline="400">
            <Box background="bg-surface-secondary" padding="400">
              <InlineStack gap="200">
                <Icon source={PaymentIcon} as="span" />
                <Text as="h2" variant="headingMd">
                  Rates
                </Text>
              </InlineStack>
            </Box>
          </Bleed>
          <InlineGrid gap="500" columns={3}>
            <BlockStack gap="300">
              <Text as="h2" variant="headingMd">
                1 Hour
              </Text>
              <Text as="p" variant="bodyLg">
                Simple Mechanic tasks
              </Text>
              <span>
                <Button icon={CartIcon} url="https://buy.stripe.com/00g6pSfhR7r136MaEU" target="_blank">
                  $120
                </Button>
              </span>
            </BlockStack>
            <BlockStack gap="300">
              <Text as="h2" variant="headingMd">
                3 Hours
              </Text>
              <Text as="p" variant="bodyLg">
                Medium-complexity tasks
              </Text>
              <span>
                <Button icon={CartIcon} url="https://buy.stripe.com/5kA01u2v5aDdaze28A" target="_blank">
                  $330
                </Button>
              </span>
            </BlockStack>

            <BlockStack gap="300">
              <Text as="h2" variant="headingMd">
                5 Hours
              </Text>
              <Text as="p" variant="bodyLg">
                Complex Mechanic tasks
              </Text>
              <span>
                <Button icon={CartIcon} url="https://buy.stripe.com/14k4hKglVcLldLq8wZ" target="_blank">
                  $500
                </Button>
              </span>
            </BlockStack>
          </InlineGrid>
        </BlockStack>
      </Card>
    </>
  );
}

export default Rates;
