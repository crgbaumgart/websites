# syntax=docker/dockerfile:1.7

# ─────────────────────────────────────────────────────────────
# Stage 1: Base image with pnpm
# ─────────────────────────────────────────────────────────────
# Pin Node version to match your dev environment (Node 24).
# Using Alpine for a smaller base image.
FROM node:24-alpine AS base

# Enable corepack so pnpm is available as a command.
# Corepack ships with Node but is disabled by default.
RUN corepack enable

# Working directory inside the container. Convention: /app
WORKDIR /app

# ─────────────────────────────────────────────────────────────
# Stage 2: Install dependencies
# ─────────────────────────────────────────────────────────────
# Separate stage so dependency installs can be cached independently
# from source code changes. Changing app code doesn't bust this cache.
FROM base AS deps

# Copy only the files needed to resolve and install deps
# This is the monorepo root structure - we're building from the repo root,
# so paths are relative to that.
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/craigs-creations/package.json ./apps/craigs-creations/

# Install deps for ONLY the craigs-creations workspace.
# -- frozen-lockfile fails if the lockfile would change (prod safety).
# --filter limits install to one workspace + its deps.
RUN pnpm install --frozen-lockfile --filter craigs-creations... --config.strict-dep-builds=false

# ─────────────────────────────────────────────────────────────
# Stage 3: Build the Next.js app
# ─────────────────────────────────────────────────────────────
FROM base as builder 

# Pull in the installed node_modules from the deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/craigs-creations/node_modules ./apps/craigs-creations/node_modules

# Copy everything else needed for the build.
# Copy more than the deps stage bc buildign needs source code.
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/craigs-creations ./apps/craigs-creations

# Build the app. This produces .next/standalone w/ prod server.
WORKDIR /app/apps/craigs-creations
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm build

# ─────────────────────────────────────────────────────────────
# Stage 4: Production runtime
# ─────────────────────────────────────────────────────────────
# Fresh, minimal image - only the build output, no source code or build tools.
FROM node:24-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create a non-root user for runtime security.
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy the standalone server, static assets, and public files.
#
# Note: Next.js standalone output puts the server at .next/standalone/
# but static files and public/ need to be placed alongside it.
COPY --from=builder --chown=nextjs:nodejs /app/apps/craigs-creations/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/craigs-creations/.next/static ./apps/craigs-creations/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/apps/craigs-creations/public ./apps/craigs-creations/public

USER nextjs

# Next.js standalone server listens on port 3000 by default.
# Setting HOSTNAME=0.0.0.0 makes it bind to all interfaces (required in Docker).
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
EXPOSE 3000

# Start the standalone server
# The server.js is at /app/apps/craigs-creations/server.js bc of
# Next.js's monorepo-aware standalone output.
CMD ["node", "apps/craigs-creations/server.js"]
