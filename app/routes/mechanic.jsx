import "../main.css";

import enTranslations from "@shopify/polaris/locales/en.json";
import {
  AppProvider,
  Bleed,
  Box,
  Card,
  DescriptionList,
  Divider,
  Icon,
  Page,
  Text,
  Thumbnail,
  InlineStack,
  FooterHelp,
  Layout,
  Link,
  Frame,
  BlockStack,
  Avatar,
} from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import { ChatIcon, ReceiptRefundIcon, ReplayIcon, StarFilledIcon, PaymentIcon, WorkIcon } from "@shopify/polaris-icons";
import { useState } from "react";
import { Table } from "../components/mechanicTemplates";
import { Availability } from "../components/availability";
import Rates from "../components/ratesMechanic";

export const meta = () => {
  return [
    { title: "Hire A Shopify Mechanic | Kalen Jordan" },
    { name: "description", content: "I specialize in automations for Shopify and love Mechanic!" },
  ];
};

export default function Index() {
  const [dismissed, setDismissed] = useState(false);
  const [showNewsletter, setShowNewsletter] = useState(false);

  return (
    <AppProvider i18n={enTranslations}>
      <div class="breadcrumb subdued">
        <a href="/">&lt; Home</a>
      </div>
      <Frame>
        <Page>
          <Box paddingBlockStart={{ xs: 400, lg: 400 }}>
            <BlockStack gap="500">
              <Box paddingInline={{ xs: "400", sm: "0" }}>
                <Card>
                  <Bleed marginInline="400" marginBlock="400">
                    <img style={{ width: "100%", marginBottom: "-7px" }} src="/mechanic-header.png"></img>
                  </Bleed>
                </Card>
              </Box>
              <BlockStack gap="100">
                <Box paddingBlockStart={{ xs: 200, sm: 400, md: 800 }} paddingBlockEnd={{ xs: 200, sm: 400, md: 800 }}>
                  <Text alignment="center" tone="subdued">
                    Brands I've worked with
                  </Text>
                  <InlineStack gap={{ xs: 0, sm: 100, lg: 800 }} align="center">
                    <img className="logo chubbies" src="/logo-chubbies.png" style={{ height: "30px" }} />
                    <img className="logo rothys" src="/logo-rothys.png" style={{ height: "25px", marginTop: "3px" }} />
                    <img className="logo rothys" src="/logo-rainbow.png" style={{ height: "25px" }} />
                  </InlineStack>
                </Box>
              </BlockStack>
              <Layout>
                <Layout.Section>
                  <BlockStack gap="500">
                    <Card title="Order details" sectioned>
                      <BlockStack gap="300">
                        <Text as="h2">Hey there!</Text>

                        <Text as="p" variant="bodyLg">
                          Having built hundreds of workflow automations for Shopify using Mechanic, custom code, and
                          other tools, if there's something that's possible to do in Shopify, I can do it for you. And
                          usually prettttty quick.
                        </Text>
                        <Text as="p" variant="bodyLg">
                          Don't bang your head against the wall trying to articulate exactly what needs to happen. Just
                          explain it to me in plain English and I'll figure it out.
                        </Text>
                        <Text as="p" variant="bodyLg">
                          Can't wait to hear from you!
                        </Text>
                        <Box padding="200">
                          <Divider borderColor="border" />
                        </Box>
                        <InlineStack gap="200">
                          <span>
                            <Thumbnail as="span" size="small" source="/kalen-avatar-circle.png" />
                          </span>
                          <Text as="p" variant="bodyLg">
                            Kalen Jordan
                            <br />
                            Shopify Automation Specialist
                          </Text>
                        </InlineStack>
                      </BlockStack>
                    </Card>
                    <Card title="Order details" sectioned>
                      <BlockStack gap="300">
                        <Text as="h2" variant="headingMd">
                          "Kalen is a force! Smart, motivated, and kind—a perfect combination."
                        </Text>

                        <Text as="p" variant="bodyLg">
                          Matt Sodomsky
                          <br />
                          VP, Product & Strategy, Mechanic
                        </Text>
                      </BlockStack>
                    </Card>
                    <Card title="Order details" background="bg-surface-secondary">
                      <BlockStack gap="300">
                        <DescriptionList
                          items={[
                            {
                              term: (
                                <InlineStack as="span" align="start" gap="200">
                                  <span>
                                    <Icon source={ChatIcon} as="span" />
                                  </span>
                                  Estimate
                                </InlineStack>
                              ),
                              description:
                                "Let me know what you're looking to get done and I'll give you a rough estimate for the work.",
                            },
                            {
                              term: (
                                <InlineStack as="span" align="start" gap="200">
                                  <span>
                                    <Icon source={PaymentIcon} as="span" />
                                  </span>
                                  Prepayment
                                </InlineStack>
                              ),
                              description:
                                "Once you feel comfortable, you can make a prepayment to lock you into my schedule, per my next availability.",
                            },
                            {
                              term: (
                                <InlineStack as="span" align="start" gap="200">
                                  <span>
                                    <Icon source={WorkIcon} as="span" />
                                  </span>
                                  Complete work
                                </InlineStack>
                              ),
                              description: "I'll begin work and usually knock it out within a day or two",
                            },
                            {
                              term: (
                                <InlineStack as="span" align="start" gap="200">
                                  <span>
                                    <Icon source={ReplayIcon} as="span" />
                                  </span>
                                  Go monthly?
                                </InlineStack>
                              ),
                              description:
                                "Once we're done with the initial batch of hours, if things are going well and you have more work to get done, we can make it a monthly retainer.",
                            },
                          ]}
                        />
                      </BlockStack>
                    </Card>
                    <Rates showButtons={false} />

                    {Table()}
                  </BlockStack>
                </Layout.Section>
                <Layout.Section variant="oneThird">
                  <BlockStack gap="500">
                    <Availability showBookCall={true} />
                    <Card>
                      <BlockStack gap="300">
                        <InlineStack as="span" align="start" gap="0">
                          <span>
                            <Icon source={StarFilledIcon} as="span" />
                          </span>
                          <span>
                            <Icon source={StarFilledIcon} as="span" />
                          </span>
                          <span>
                            <Icon source={StarFilledIcon} as="span" />
                          </span>
                          <span>
                            <Icon source={StarFilledIcon} as="span" />
                          </span>
                          <span>
                            <Icon source={StarFilledIcon} as="span" />
                          </span>
                        </InlineStack>

                        <Text as="p" variant="bodyLg">
                          "I had the pleasure of working with Kalen, and I must say, Kalen is the best! The effort and
                          dedication put into completing my project were truly commendable. I am incredibly grateful for
                          all the hard work and the successful outcome. I look forward to collaborating with Kalen again
                          on future automation projects. Highly recommended!"
                        </Text>
                      </BlockStack>
                    </Card>
                    <Card>
                      <BlockStack gap="300">
                        <InlineStack as="span" align="start" gap="0">
                          <span>
                            <Icon source={StarFilledIcon} as="span" />
                          </span>
                          <span>
                            <Icon source={StarFilledIcon} as="span" />
                          </span>
                          <span>
                            <Icon source={StarFilledIcon} as="span" />
                          </span>
                          <span>
                            <Icon source={StarFilledIcon} as="span" />
                          </span>
                          <span>
                            <Icon source={StarFilledIcon} as="span" />
                          </span>
                        </InlineStack>

                        <Text as="p" variant="bodyLg">
                          "Kalen was very prompt and knowledgeable. He made quick work of an issue I was having sending
                          order information to fulfillment partners automatically. Went above and beyond to help in
                          other areas of automation as well."
                        </Text>
                      </BlockStack>
                    </Card>
                  </BlockStack>
                </Layout.Section>
              </Layout>
              <FooterHelp>
                <BlockStack gap="500">
                  <BlockStack gap="400">
                    <Text alignment="center" tone="subdued">
                      Systems I've integrated with
                    </Text>
                    <InlineStack gap="600" align="center">
                      <img className="logo shopify" src="/logo-shopify.png" alt="Shopify Logo" />
                      <img className="logo shopify-plus" src="/logo-shopify-plus.png" alt="Shopify Plus Logo" />
                      <img className="logo klaviyo" src="/logo-klaviyo.png" />
                      <img className="logo xero" src="/logo-xero.png" />
                      <img className="logo recharge" src="/logo-recharge.png" />
                      <img className="logo" src="/logo-netsuite.png" />
                    </InlineStack>
                  </BlockStack>
                  <Divider borderColor="border" />
                  <Text alignment="center">Made with 💚 by Kalen Jordan</Text>
                </BlockStack>
              </FooterHelp>
            </BlockStack>
          </Box>
        </Page>
      </Frame>
    </AppProvider>
  );
}
