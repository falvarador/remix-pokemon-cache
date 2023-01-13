import type { EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";

import { renderToString } from "react-dom/server";

import { CssBaseline } from "@nextui-org/react";

const styles = CssBaseline.flush();

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  ).replace(
    /<\/head>/,
    `<style id="stitches">${styles.props.dangerouslySetInnerHTML.__html}</style></head>`
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}
