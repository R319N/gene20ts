"use client";
import { styles } from "@/styles/styles";
import {
    Box,
    Stack,
    Typography,
} from "@mui/material";
import Image from "next/image";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { grey } from "@mui/material/colors";
import { Portfolio } from "../../../../type";
import GlowingButton from "@/components/glowingButton";


const FeaturedPortfolio = ({ portfolio }: any) => {
    return (
        <Box
            gap={4}
            sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: { xs: "column", md: "row" },
                overflow: "hidden",
                width: "100%",
                my: "2rem"
            }}
        >

            <Box
                sx={{
                    position: "relative",
                    borderRadius: "10px",
                    overflow: "hidden",
                    width: { xs: "100%", md: "500px" },
                    height: { xs: "50vh", md: "400px" },
                }}
            >

                <Image src={portfolio.imgUrl} alt="product image" fill priority />
            </Box>
            {/* <Stack p="1rem" gap={2}> */}
            <Box
                gap={2}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                }}
            >
                <Box>
                    <Typography
                        variant="h4"
                        textTransform="capitalize"
                        sx={{
                            fontWeight: (theme) => theme.typography.fontWeightRegular,
                        }}
                    >
                        {portfolio?.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        textTransform="capitalize"
                        sx={{
                            fontWeight: (theme) => theme.typography.fontWeightLight,
                            color: (theme) => theme.palette.text.secondary,
                        }}
                    >
                        {portfolio?.description}
                    </Typography>
                </Box>
                <Box>
                    <GlowingButton>
                        visit website
                    </GlowingButton>
                </Box>

            </Box>

            {/* </Stack> */}

            {/*
        <Stack p="1rem" gap={2}>
          <Box
            gap={0}
            sx={{
              display: { xs: "flex", md: "block" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="h6"
                color="secondary"
                textTransform="capitalize"
                sx={{
                  fontWeight: (theme) => theme.typography.fontWeightMedium,
                }}
              >
                {product?.title}
              </Typography>
              <Typography
                variant="body2"
                textTransform="capitalize"
                sx={{
                  fontWeight: (theme) => theme.typography.fontWeightRegular,
                }}
              >
                {product?.brand}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }} gap={1}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: (theme) => theme.typography.fontWeightMedium,
                }}
              >
                <FormattedPrice amount={product?.price || defaultPrice} />
              </Typography>
              {product?.oldPrice && (
                <Typography
                  variant="body1"
                  sx={{
                    textDecoration: "line-through",
                    color: grey[500],
                  }}
                >
                  <FormattedPrice amount={product?.oldPrice ?? defaultPrice} />
                </Typography>
              )}
            </Box>
          </Box>

          <Stack gap={1}>
            <Typography variant="body1" textTransform="capitalize">
              {product?.description}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "left",
                justifyContent: "left",
              }}
              gap={1}
            >
              <Rating
                name="product-rating"
                value={product?.rating || 0}
                precision={0.5}
                readOnly
                sx={{ color: "yellow.400", fontSize: "20px" }}
              />
              <span> ({product?.numReviews || 0} reviews)</span>
            </Box>
          </Stack>

          <Stack sx={{ color: (theme) => theme.palette.grey[600] }}>
            <Typography variant="body2">
              SKU: <span className="text-darkText">{product?._id}</span>
            </Typography>
            <Typography variant="body2">
              Gender: <span className="text-darkText">{product?.gender}</span>
            </Typography>
          </Stack>

          <Box sx={{ ...styles.between_flex }}>
            <GlowingButton
              startIcon={<ShoppingCart />}
              // Inside your onClick handler
              onClick={() => {
                const cartItem: CartItem = {
                  _id: product._id,
                  productId: product._id, // Map Product._id to CartItem.productId
                  title: product.title,
                  category: product.category,
                  brand: product.brand,
                  gender: product.gender,
                  isNew: product.isNewItem,
                  oldPrice: product.oldPrice,
                  price: product.price,
                  description: product.description,
                  rating: product.rating,
                  image: product.image,
                  banner: product.banner,
                  isOnSpecial: product.isOnSpecial,
                  isFeatured: product.isFeatured,
                  numReviews: product.numReviews,
                  quantity: 1, // Default quantity set to 1
                };

                dispatch(addToCart(cartItem));
                toast.success(
                  `${product.title.substring(0, 15)} added successfully!`
                );
              }}
            >
              add to cart
            </GlowingButton>
          </Box>
        </Stack>*/}
        </Box>
    );
};

export default FeaturedPortfolio;
