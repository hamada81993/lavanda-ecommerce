import { siteSettings } from "../config/siteSettings";

export const applyTheme = () => {
  const root = document.documentElement;

  root.style.setProperty(
    "--color-primary",
    siteSettings.theme.primary
  );

  root.style.setProperty(
    "--color-primary-light",
    siteSettings.theme.primaryLight
  );

  root.style.setProperty(
    "--color-primary-dark",
    siteSettings.theme.primaryDark
  );

  root.style.setProperty(
    "--color-text",
    siteSettings.theme.text
  );

  root.style.setProperty(
    "--color-muted",
    siteSettings.theme.muted
  );

  root.style.setProperty(
    "--color-background",
    siteSettings.theme.background
  );
};