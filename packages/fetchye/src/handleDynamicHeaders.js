/*
 * Copyright 2023 American Express Travel Related Services Company, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

export const handleDynamicOptions = (options) => {
  const dynamicHeaders = typeof options.headers === 'function';
  const dynamicBody = typeof options.body === 'function';

  if (!dynamicHeaders && !dynamicBody) {
    return options;
  }

  const resolved = { ...options };
  if (dynamicHeaders) {
    resolved.headers = options.headers();
  }
  if (dynamicBody) {
    resolved.body = options.body();
  }
  return resolved;
};

export const handleDynamicHeaders = handleDynamicOptions;
