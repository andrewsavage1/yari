/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// AUTOGENERATED BY glean_parser. DO NOT EDIT. DO NOT COMMIT.

import PingType from "@mozilla/glean/private/ping";

/**
 * A ping that will be sent everytime a new page is visited.
 *
 * Generated from `page`.
 */
export const page = new PingType({
  includeClientId: true,
  sendIfEmpty: false,
  name: "page",
  reasonCodes: [],
});

/**
 * A ping that will be sent everytime a page event happens (user interaction).
 *
 * Generated from `action`.
 */
export const action = new PingType({
  includeClientId: true,
  sendIfEmpty: false,
  name: "action",
  reasonCodes: [],
});
