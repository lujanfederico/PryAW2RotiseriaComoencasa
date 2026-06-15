CREATE TABLE menu(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion TEXT,
    imagen VARCHAR(255),
    precio NUMERIC(10,2)
);

INSERT INTO menu (nombre, descripcion, imagen, precio) VALUES
('Pizza Muzzarella', 'Pizza clásica con abundante queso', 'pizza-xl.jpg', 8500),
('Hamburguesa Completa', 'Hamburguesa doble con papas fritas', 'hamburguesa-completa.jpg', 6200),
('Pancho Especial', 'Pancho con cheddar y panceta', 'pancho-especial.jpg', 3500),
('Papas con Cheddar', 'Papas fritas con cheddar y verdeo', 'papas-cheddar.jpg', 4800),
('Tacos Mexicanos', 'Tacos con carne y salsa picante', 'tacos.jpg', 7000),
('Pollo al Spiedo', 'Pollo asado con papas', 'pollo-spiedo.jpg', 12000),
('Lomito Completo', 'Lomito con jamón, queso y huevo', 'lomito.jpg', 8900),
('Shawarma', 'Wrap árabe con carne y vegetales', 'shawarma.jpg', 7600),
('Pizza Pepperoni', 'Pizza con pepperoni extra', 'pizza-pepperoni.jpg', 9500),
('Burger BBQ', 'Hamburguesa con salsa barbacoa', 'burger-bbq.jpg', 7300),
('Alitas Picantes', 'Alitas de pollo con salsa picante', 'alitas.jpg', 6800),
('Cheesecake', 'Cheesecake con frutos rojos', 'cheesecake.jpg', 5400);

