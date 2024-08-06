
import { match } from "@formatjs/intl-localematcher";
import { NextRequest, NextResponse } from "next/server";
import Negotiator from 'negotiator';
 
export let locales = ['en-US', 'nl-NL', 'nl']
let defaultLocale = 'en-US' 

// Get the preferred locale, similar to the above or using a library
export function getLocale(request: NextRequest) {

    // Error [ERR_HTTP_HEADERS_SENT]: Cannot append headers after they are sent to the client
    const headers: { [key: string]: string } = {};
    request.headers.forEach((value, key) => {
        headers[key] = value
    })

    let languages = new Negotiator({ headers }).languages()
    return match(languages, locales, defaultLocale);
}