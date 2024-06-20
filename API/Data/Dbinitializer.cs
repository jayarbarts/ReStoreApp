using API.Entities;
using Microsoft.AspNetCore.Identity;

namespace API.Data
{
    public static class Dbinitializer
    {
        public static async Task Initialize(StoreContext context, UserManager<User> userManager) 
        {
            if (!userManager.Users.Any())
            {
                var user = new User
                {
                    UserName = "bob",
                    Email = "bob@test.com"
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
                await userManager.AddToRoleAsync(user, "Member");

                var admin = new User
                {
                    UserName = "admin",
                    Email = "admin@test.com"
                };

                await userManager.CreateAsync(admin, "Pa$$w0rd");
                await userManager.AddToRolesAsync(admin, new[] {"Member", "Admin"});
            }
            
            if (context.Products.Any()) return;

            var products = new List<Product>
            {
                new Product
                {
                    Name = "Special Edition Bini Shirt",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 20000,
                    PictureUrl = "/images/products/bini_shirt.jpg",
                    Brand = "Bini Merch",
                    Type = "Shirt",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Bini Lightstick",
                    Description = "Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.",
                    Price = 15000,
                    PictureUrl = "/images/products/bini_lightstick.jpg",
                    Brand = "Bini Merch",
                    Type = "Accessories",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Bini Totebag",
                    Description =
                        "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                    Price = 18000,
                    PictureUrl = "/images/products/bini_totebag.jpg",
                    Brand = "Totes",
                    Type = "Bags",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Bini Eyeglasses Pink",
                    Description =
                        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.",
                    Price = 30000,
                    PictureUrl = "/images/products/bini_eyeglasses_pink.jpg",
                    Brand = "EO Executive",
                    Type = "Accessories",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Bini Eyeglasses Black",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 25000,
                    PictureUrl = "/images/products/bini_eyeglasses_black.webp",
                    Brand = "EO Executive",
                    Type = "Accessories",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Bini Winter Hat Black",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 12000,
                    PictureUrl = "/images/products/bini_hat_black.jpg",
                    Brand = "Zalora",
                    Type = "Hats",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Bini Winter Hat Red",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 12000,
                    PictureUrl = "/images/products/bini_hat_red.webp",
                    Brand = "Zalora",
                    Type = "Hats",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Bini Winter Hat Pink",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 12000,
                    PictureUrl = "/images/products/bini_hat_pink.jpg",
                    Brand = "Shein",
                    Type = "Hats",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Bini Winter Hat Gray",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 12000,
                    PictureUrl = "/images/products/bini_hat_gray.webp",
                    Brand = "Shein",
                    Type = "Hats",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Bini Hoodie Pink",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 1800,
                    PictureUrl = "/images/products/bini_hoodie_pink.webp",
                    Brand = "Zalora",
                    Type = "Hoodies",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Bini Hoodie Mink",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 1800,
                    PictureUrl = "/images/products/bini_hoodie_mint.jpg",
                    Brand = "Zalora",
                    Type = "Hoodies",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Bini Handheld Mirror Pink",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 1600,
                    PictureUrl = "/images/products/bini_mirror_pink.webp",
                    Brand = "Bini Merch",
                    Type = "Accessories",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Bini Handheld Mirror Mint",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 1600,
                    PictureUrl = "/images/products/bini_mirror_mint.webp",
                    Brand = "Bini Merch",
                    Type = "Accessories",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Bini Handheld Mirror White",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 1600,
                    PictureUrl = "/images/products/bini_mirror_white.webp",
                    Brand = "Bini Merch",
                    Type = "Accessories",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Bini Mug 1",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 18999,
                    PictureUrl = "/images/products/bini_mug1.jpg",
                    Brand = "Bini Merch",
                    Type = "Accessories",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Bini Mug 2",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 18999,
                    PictureUrl = "/images/products/bini_mug2.jpg",
                    Brand = "Bini Merch",
                    Type = "Accessories",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Bini PVC Fan",
                    Description = "Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.",
                    Price = 15000,
                    PictureUrl = "/images/products/bini_pvc_fan.jpg",
                    Brand = "Bini Merch",
                    Type = "Accessories",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Bini Notebook",
                    Description =
                        "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                    Price = 18000,
                    PictureUrl = "/images/products/bini_notebook.jpg",
                    Brand = "Bini Merch",
                    Type = "Accessories",
                    QuantityInStock = 100
                },
            };

            context.Products.AddRange(products);

            // foreach (var product in products)
            // {
            //     context.Products.Add(product);
            // }

            context.SaveChanges();
        }
    }
}