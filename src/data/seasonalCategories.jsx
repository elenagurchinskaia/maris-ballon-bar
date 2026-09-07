import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EggIcon from "@mui/icons-material/Egg";
import { colors } from "../theme";

// Order here drives the seasonal grid order (top of page) and is the source
// of truth for each category's own gallery page at /seasonal-items/:slug.
export const seasonalCategories = {
  "balloons-florals": {
    slug: "balloons-florals",
    name: "Balloons and Florals",
    description:
      "Balloon bouquets paired with fresh florals for birthdays, showers, congrats and everyday celebrations.",
    icon: <LocalFloristIcon fontSize="small" />,
    iconBg: "#FADCE9",
    iconColor: colors.primary,
    images: [
      {
        src: "/assets/seasonal-items/balloons-florals/balloons-florals-01.jpg",
        alt: "Balloon and fresh floral arrangement",
      },
      {
        src: "/assets/seasonal-items/balloons-florals/balloons-florals-02.jpg",
        alt: "Balloon and fresh floral arrangement",
      },
      {
        src: "/assets/seasonal-items/balloons-florals/balloons-florals-03.jpg",
        alt: "Baby shower floral arrangement",
      },
      {
        src: "/assets/seasonal-items/balloons-florals/balloons-florals-04.jpg",
        alt: "Congratulations floral arrangement",
      },
      {
        src: "/assets/seasonal-items/balloons-florals/balloons-florals-05.png",
        alt: "Floral and balloon arrangement",
      },
      {
        src: "/assets/seasonal-items/balloons-florals/balloons-florals-06.jpg",
        alt: "Bridal floral arrangement",
      },
      {
        src: "/assets/seasonal-items/balloons-florals/balloons-florals-07.jpg",
        alt: "Happy birthday floral arrangement",
      },
      {
        src: "/assets/seasonal-items/balloons-florals/balloons-florals-08.jpg",
        alt: "Happy birthday floral arrangement",
      },
      {
        src: "/assets/seasonal-items/balloons-florals/balloons-florals-09.jpg",
        alt: "Happy birthday floral and balloon arrangement for mom",
      },
      {
        src: "/assets/seasonal-items/balloons-florals/balloons-florals-10.jpg",
        alt: "“Just because” floral arrangement",
      },
    ],
  },
  christmas: {
    slug: "christmas",
    name: "Christmas",
    description:
      "Festive stuffed-balloon designs and holiday styling to deck your halls this season.",
    icon: <AcUnitIcon fontSize="small" />,
    iconBg: "#E5DAF7",
    iconColor: colors.softAccent,
    images: [
      {
        src: "/assets/seasonal-items/christmas/christmas-01.jpg",
        alt: "Stuffed balloon Christmas installation",
      },
      {
        src: "/assets/seasonal-items/christmas/christmas-02.jpg",
        alt: "Stuffed balloon Christmas design",
      },
    ],
  },
  valentines: {
    slug: "valentines",
    name: "Valentines",
    description:
      "Romantic balloon and floral designs for Valentine's Day surprises and galentine's parties.",
    icon: <FavoriteIcon fontSize="small" />,
    iconBg: "#FADCE9",
    iconColor: colors.primary,
    images: [
      {
        src: "/assets/seasonal-items/valentines/valentines-01.jpg",
        alt: "Valentine's Day balloon and floral design",
      },
      {
        src: "/assets/seasonal-items/valentines/valentines-02.jpg",
        alt: "Valentine's Day balloon and floral design",
      },
      {
        src: "/assets/seasonal-items/valentines/valentines-03.webp",
        alt: "Valentine's Day balloon design",
      },
    ],
  },
  easter: {
    slug: "easter",
    name: "Easter",
    description:
      "Pastel balloon and floral styling for Easter brunches, egg hunts and spring gatherings.",
    icon: <EggIcon fontSize="small" />,
    iconBg: "#FCF0C4",
    iconColor: "#D6A81A",
    images: [
      {
        src: "/assets/seasonal-items/easter/easter-01.png",
        alt: "Easter balloon and floral design",
      },
    ],
  },
};

export const seasonalCategoryList = Object.values(seasonalCategories);
