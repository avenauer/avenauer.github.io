export const isProd = process.env.NODE_ENV === "production";

export const Kranplatt = {
  k1: `${isProd ? "/my-website" : ""}/assets/kranplatt/kranplatt_1.jpg`,
  k2: `${isProd ? "/my-website" : ""}/assets/kranplatt/kranplatt_2.jpg`,
  k3: `${isProd ? "/my-website" : ""}/assets/kranplatt/kranplatt_3.jpg`,
  k4: `${isProd ? "/my-website" : ""}/assets/kranplatt/kranplatt_4.jpg`,
};

export const Bp = {
  bp1: `${isProd ? "/my-website" : ""}/assets/budopoint/budopoint_1.jpg`,
  bp2: `${isProd ? "/my-website" : ""}/assets/budopoint/budopoint_2.jpg`,
};

export const VR = {
  vr1: `${isProd ? "/my-website" : ""}/assets/vr/vrilift_1.jpg`,
  vr2: `${isProd ? "/my-website" : ""}/assets/vr/vrilift_2.jpg`,
  vr3: `${isProd ? "/my-website" : ""}/assets/vr/vrilift_3.jpg`,
  vr4: `${isProd ? "/my-website" : ""}/assets/vr/vrilift_4.jpg`,
};

export const NFTDice = {
  nft1: `${isProd ? "/my-website" : ""}/assets/nft/die_1.jpg`,
  nft2: `${isProd ? "/my-website" : ""}/assets/nft/die_2.jpg`,
  nft3: `${isProd ? "/my-website" : ""}/assets/nft/die_3.jpg`,
  nft4: `${isProd ? "/my-website" : ""}/assets/nft/nft_1.jpg`,
  nft5: `${isProd ? "/my-website" : ""}/assets/nft/nft_2.jpg`,
};
