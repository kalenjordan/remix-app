import "../main.css";

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

import { api } from "../api";
import { useFindMany, useMaybeFindOne } from "@gadgetinc/react";
import { useLoaderData } from "@remix-run/react";

export async function loader({ params }) {
  return {
    id: params.id,
  };
}

export default function Index() {
  const params = useLoaderData();
  const [{ data, fetching, error }] = useMaybeFindOne(api.template, params.id);

  return (
    <AppProvider i18n={enTranslations}>
      <div class="breadcrumb subdued">
        <a href="/">&lt; Home</a>
      </div>
      <Frame>
        <Page>
          <Box paddingBlockStart={{ xs: 400, lg: 400 }}>
            <BlockStack gap="500">
              <BlockStack gap="200">
                {/*data: {JSON.stringify(data)}*/}
                <Text as="h1" variant="headingXl" alignment="center" fontWeight="regular">
                  {fetching ? "..." : data.name}
                </Text>
                <Box paddingInline={{ xs: 600, lg: 3200 }}>
                  <Text alignment="center" variant="bodyLg" fontWeight="400" className="subtitle">
                    {fetching ? "..." : data.description}
                  </Text>
                </Box>
              </BlockStack>
              {/*
              <Box paddingInline={{ xs: "400", sm: "0" }}>
                <Card>
                  <Bleed marginInline="400" marginBlock="400">
                    <img style={{ width: "100%", marginBottom: "-7px" }} src="/flow-hire.png"></img>
                  </Bleed>
                </Card>
              </Box>
              */}
              <BlockStack gap="500">
                <Card title="Order details" sectioned>
                  <BlockStack gap="300">
                    <Text as="h2">Hey there!</Text>

                    <Text as="p" variant="bodyLg">
                      Having built hundreds of workflow automations for Shopify using Flow,{" "}
                      <Link monochrome url="/mechanic">
                        Mechanic
                      </Link>
                      , MESA, custom code, and other automation apps...if there's something that's possible to do in
                      Shopify, I should be able to do it for you. And usually pretty quickly.
                    </Text>
                    <Text as="p" variant="bodyLg">
                      Don't bang your head against the wall trying to articulate exactly what needs to happen. Figuring
                      it out is my specialty.
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
                      <Link monochrome url="mailto:hey@flow-helper.com">
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
              </BlockStack>
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
