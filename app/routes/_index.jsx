import enTranslations from "@shopify/polaris/locales/en.json";
import {
  AppProvider,
  Badge,
  Bleed,
  Box,
  Button,
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
import {
  AutomationIcon,
  CalendarIcon,
  DiscountIcon,
  ReceiptRefundIcon,
  ReplayIcon,
  ReturnIcon,
  ThemeIcon,
  ImportIcon,
  PaymentIcon,
  WorkIcon,
} from "@shopify/polaris-icons";
import { useState } from "react";
import { TemplateList } from "../components/templates";
// import { Availability } from "../components/Availability";
import Rates from "../components/rates";
import styles from "../main.css?url";

export const meta = () => {
  return [
    { title: "Flow Helper | Shopify Automation As A Service" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const links = () => [{ rel: "stylesheet", href: styles }];

export default function Index() {
  const [dismissed, setDismissed] = useState(false);
  const [showNewsletter, setShowNewsletter] = useState(false);

  return (
    <AppProvider i18n={enTranslations}>
      <Frame>
        <Page>
          <Box paddingBlockStart={{ xs: 400, lg: 400 }}>
            <BlockStack gap="500">
              <BlockStack gap="200">
                <Text as="h1" variant="headingXl" alignment="center" fontWeight="regular">
                  Shopify Automation As&nbsp;A&nbsp;Service
                </Text>
                <Box paddingInline={{ xs: 600, lg: 3200 }}>
                  <Text alignment="center" variant="bodyLg" fontWeight="400" className="subtitle">
                    Whether using Shopify Flow, IPaaS systems, or writing custom - if you need any automation done in
                    Shopify or integrations with systems, I'm your guy.
                  </Text>
                </Box>
              </BlockStack>
              <Box paddingInline={{ xs: "400", sm: "0" }}>
                <Card>
                  <Bleed marginInline="400" marginBlock="400">
                    <img style={{ width: "100%", marginBottom: "-7px" }} src="flow-hire.png"></img>
                  </Bleed>
                </Card>
              </Box>
              <BlockStack gap="100">
                <Box paddingBlockStart={{ xs: 200, sm: 400, md: 800 }} paddingBlockEnd={{ xs: 200, sm: 400, md: 800 }}>
                  <Text alignment="center" tone="subdued">
                    Brands I've worked with
                  </Text>
                  <InlineStack gap={{ xs: 0, sm: 100, lg: 800 }} align="center">
                    <img className="logo chubbies" src="logo-chubbies.png" style={{ height: "30px" }} />
                    <img className="logo rothys" src="logo-rothys.png" style={{ height: "25px", marginTop: "3px" }} />
                    <img className="logo rothys" src="logo-rainbow.png" style={{ height: "25px" }} />
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
                          Having built hundreds of workflow automations for Shopify using 3rd party apps, Flow, and
                          custom code, if there's something that's possible to do in Shopify, I should be able to do it
                          for you. And usually pretty quickly.
                        </Text>
                        <Text as="p" variant="bodyLg">
                          Don't bang your head against the wall trying to articulate exactly what needs to happen.
                          Figuring it out is my specialty.
                        </Text>
                        <Text as="p" variant="bodyLg">
                          So, if you're looking for help with anything along these lines, I can't wait to get started!
                        </Text>
                        <Text as="p" variant="bodyLg">
                          Hit me on{" "}
                          <Link monochrome url="https://twitter.com/kalenjordan">
                            twitter
                          </Link>
                          {",  "}
                          <Link monochrome url="https://linkedin.com/in/kalen">
                            linkedin
                          </Link>
                          {", or "}
                          <Link monochrome url="mailto:kalenj@gmail.com">
                            email
                          </Link>
                          .
                        </Text>
                        <Box padding="200">
                          <Divider borderColor="border" />
                        </Box>
                        <InlineStack gap="200">
                          <span>
                            <Thumbnail as="span" size="small" source="kalen-avatar-circle.png" />
                          </span>
                          <Text as="p" variant="bodyLg">
                            Kalen Jordan
                            <br />
                            Shopify Automation Specialist
                          </Text>
                        </InlineStack>
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
                                    <Icon source={CalendarIcon} as="span" />
                                  </span>
                                  Schedule a call
                                </InlineStack>
                              ),
                              description: "We'll jump on a call to talk through your needs.",
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
                                  Begin work
                                </InlineStack>
                              ),
                              description:
                                "I'll begin work and track hours on a daily basis so you have visibility into what's happening.",
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
                            {
                              term: (
                                <InlineStack as="span" align="start" gap="200">
                                  <span>
                                    <Icon source={ReceiptRefundIcon} as="span" />
                                  </span>
                                  Refund?
                                </InlineStack>
                              ),
                              description:
                                "At any time, you can request a refund for any of the unused hours that were prepaid.",
                            },
                          ]}
                        />
                      </BlockStack>
                    </Card>
                    {TemplateList()}
                  </BlockStack>
                </Layout.Section>
                <Layout.Section variant="oneThird">
                  <BlockStack gap="500">
                    <Card>
                      <BlockStack gap="300">
                        <Bleed marginBlockStart={400} marginInline={400}>
                          <div className="newsletter-card-title">
                            <InlineStack gap="200">
                              <Icon source={AutomationIcon} as="span" />
                              <Text as="h2" variant="headingMd">
                                The Shopify Automation Newsletter
                              </Text>
                            </InlineStack>
                          </div>
                        </Bleed>
                        <Text as="p" variant="bodyLg">
                          Find out interesting ways to automate Shopify using Flow, Mechanic, and other tools.
                        </Text>
                        {!showNewsletter && (
                          <InlineStack as="span" align="start" gap="200">
                            <Button as="span" variant="primary" target="_blank" onClick={() => setShowNewsletter(true)}>
                              Subscribe For Free
                            </Button>
                          </InlineStack>
                        )}
                        {showNewsletter && (
                          <iframe
                            src="https://embeds.beehiiv.com/28464cbf-e8c2-4cac-ad4a-7353b446aab9?slim=true"
                            data-test-id="beehiiv-embed"
                            height="52"
                            frameborder="0"
                            scrolling="no"
                            style={{ width: "100%" }}
                          ></iframe>
                        )}
                      </BlockStack>
                    </Card>
                    <Card>
                      <BlockStack gap="300">
                        <Bleed marginBlockStart="400" marginInline="400">
                          <Box background="bg-surface-secondary" padding="400">
                            <InlineStack gap="200">
                              <Avatar size="xs" source="flow-helper-icon.png" />
                              <Text as="h2" variant="headingMd">
                                Flow Helper Shopify App
                              </Text>
                            </InlineStack>
                          </Box>
                        </Bleed>
                        <Text as="p" variant="bodyLg">
                          Flow Helper is a Shopify app that adds missing triggers and actions to use natively within
                          Flow, including bulk flow runs.
                        </Text>
                        <InlineStack as="span" align="start" gap="200">
                          <Button
                            as="span"
                            url="https://apps.shopify.com/flow-helper?show_store_picker=1"
                            target="_blank"
                          >
                            Check it out
                          </Button>
                        </InlineStack>
                      </BlockStack>
                    </Card>
                    {/*<Availability showBookCall={true} />*/}
                    <Rates showButtons={false} />
                  </BlockStack>
                </Layout.Section>
              </Layout>
              <Box paddingBlockStart={{ xs: 300, lg: 600 }}>
                <BlockStack gap="500">
                  <BlockStack gap="200">
                    <Text as="h1" variant="headingXl" alignment="center" fontWeight="regular">
                      Recent Work Highlights
                    </Text>
                    <Box paddingInline={{ xs: 600, lg: 3200 }}>
                      <Text alignment="center" variant="headingMd" fontWeight="regular" className="subtitle">
                        In addition to automation work, I also pick up some other development projects from time to time
                        - here are some recent highlights.
                      </Text>
                    </Box>
                  </BlockStack>
                  <Text as="h2" variant="headingLg" alignment="center" fontWeight="regular"></Text>
                  <div className="work-grid">
                    <Card>
                      <BlockStack gap="300">
                        <InlineStack as="span" align="start" gap="200">
                          <Icon source={ImportIcon} as="span" />
                          <Text as="h2" variant="headingMd">
                            NetSuite & Shopify Integration
                          </Text>
                        </InlineStack>
                        <Text as="p" variant="bodyLg">
                          I built a NetSuite integration that has involved mapping companies, company locations, price
                          lists, products, and variants into Shopify.
                        </Text>
                        <InlineStack as="span" align="start" gap="200">
                          <Badge as="span" tone="default">
                            B2B
                          </Badge>
                          <Badge as="span" tone="default">
                            Integrations
                          </Badge>
                          <Badge as="span" tone="default">
                            Shopify Plus
                          </Badge>
                        </InlineStack>
                      </BlockStack>
                    </Card>
                    <Card title="Tags" sectioned>
                      <Bleed marginInline="400" marginBlock="400">
                        <a href="https://milkxwhiskey.com/" target="_blank">
                          <img
                            src="/milkxwhiskey-tall.png"
                            width="100%"
                            alt="Milk x Whiskey"
                            style={{ marginBottom: "-4px" }}
                          />
                        </a>
                      </Bleed>
                    </Card>
                    <Card title="Subscription app development" sectioned className="testClass">
                      <BlockStack gap="300">
                        <InlineStack as="span" align="start" gap="200">
                          <Icon source={ReplayIcon} as="span" />
                          <Text as="h2" variant="headingMd">
                            Subscription App Development
                          </Text>
                        </InlineStack>
                        <Text as="p" variant="bodyLg">
                          I'm in the process of building a Shopify app for a Subscriptions SaaS company that currently
                          has apps available for Magento and Salesforce Commerce Cloud.
                        </Text>
                        <InlineStack as="span" align="start" gap="200">
                          <Badge as="span" tone="default">
                            App Development
                          </Badge>
                          <Badge as="span" tone="default">
                            Frontend
                          </Badge>
                        </InlineStack>
                      </BlockStack>
                    </Card>
                    <Card>
                      <Bleed marginInline="400" marginBlock="400">
                        <video width="100%" controls="controls" poster="welcome.jpg">
                          <source src="welcome.mp4" />
                        </video>
                      </Bleed>
                    </Card>
                    <Card>
                      <BlockStack gap="300">
                        <InlineStack as="span" align="start" gap="200">
                          <Icon source={ThemeIcon} as="span" />
                          <Text as="h2" variant="headingMd">
                            Shopify Theme Optimizations
                          </Text>
                        </InlineStack>
                        <Text as="p" variant="bodyLg">
                          "DUDE! That looks so good! YOU ROCK!" <br />
                          -- The Client
                        </Text>

                        <InlineStack as="span" align="start" gap="200">
                          <Badge as="span" tone="default">
                            Frontend
                          </Badge>
                          <Badge as="span" tone="default">
                            Theme Development
                          </Badge>
                        </InlineStack>
                      </BlockStack>
                    </Card>
                    <Card title="Tags" sectioned>
                      <BlockStack gap="300">
                        <InlineStack as="span" align="start" gap="200">
                          <Icon source={DiscountIcon} as="span" />
                          <Text as="h2" variant="headingMd">
                            Discount Functions App
                          </Text>
                        </InlineStack>
                        <Text as="p" variant="bodyLg">
                          An app that I started working on but haven't launched yet gives you access in the backend to a
                          rule builder with infinite nesting of AND/OR logic.
                        </Text>
                        <InlineStack as="span" align="start" gap="200">
                          <Badge as="span" tone="default">
                            App Development
                          </Badge>
                          <Badge as="span" tone="default">
                            Shopify Functions
                          </Badge>
                        </InlineStack>
                      </BlockStack>
                    </Card>
                    {/*
                    <Card>
                      <a href="/posts/tag-orders-for-returned-products-in-shopify-using-mesa" target="_blank">
                        <BlockStack gap="300">
                          <InlineStack as="span" align="start" gap="200">
                            <Icon source={ReturnIcon} as="span" />
                            <Text as="h2" variant="headingMd">
                              Returned Product Tagging Flow
                            </Text>
                          </InlineStack>
                          <Text as="p" variant="bodyLg">
                            Managing returns can be a cumbersome process, especially for merchants who need to track
                            returned containers from their customers. If you're looking to simplify this process, MESA
                            offers a powerful solution that integrates seamlessly with your Shopify store.
                          </Text>
                          <InlineStack as="span" align="start" gap="200">
                            <Badge as="span" tone="default">
                              Integrations
                            </Badge>
                            <Badge as="span" tone="default">
                              Shopify
                            </Badge>
                          </InlineStack>
                        </BlockStack>
                      </a>
                    </Card>
                    */}
                  </div>
                </BlockStack>
              </Box>
              <FooterHelp>
                <BlockStack gap="500">
                  <BlockStack gap="400">
                    <Text alignment="center" tone="subdued">
                      Systems I've integrated with
                    </Text>
                    <InlineStack gap="600" align="center">
                      <img className="logo shopify" src="logo-shopify.png" alt="Shopify Logo" />
                      <img className="logo shopify-plus" src="logo-shopify-plus.png" alt="Shopify Plus Logo" />
                      <img className="logo klaviyo" src="logo-klaviyo.png" />
                      <img className="logo xero" src="logo-xero.png" />
                      <img className="logo recharge" src="logo-recharge.png" />
                      <img className="logo" src="logo-netsuite.png" />
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
