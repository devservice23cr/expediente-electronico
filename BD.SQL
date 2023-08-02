CREATE TABLE Areas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name varchar(255),
    description varchar(255),
    updated_at DateTime DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name varchar(255),
    description varchar(255),
    updated_at DateTime DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE ROLES_AREAS(
    role_id INT NOT NULL,
    area_id INT NOT NULL,
    PRIMARY KEY (role_id, area_id),
    updated_at DateTime DEFAULT CURRENT_TIMESTAMP,
    KEY fk_role (role_id),
    KEY fk_area (area_id)
);

CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    user_name VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    role_id INT,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    isActive BOOLEAN DEFAULT true,
    KEY fk_role (role_id)
);


INSERT INTO Areas (name, description) VALUES
('Area 1', 'Descripción del área 1'),
('Area 2', 'Descripción del área 2'),
('Area 3', 'Descripción del área 3');

INSERT INTO Roles (name, description) VALUES
('Role 1', 'Descripción del rol 1'),
('Role 2', 'Descripción del rol 2'),
('Role 3', 'Descripción del rol 3');

INSERT INTO ROLES_AREAS (role_id, area_id) VALUES
(1, 1),
(1, 2),
(2, 1),
(2, 3),
(3, 2),
(3, 3);

INSERT INTO Users (email, user_name, password, role_id) VALUES
('usuario1@example.com', 'usuario1', 'contraseña1', 1),
('usuario2@example.com', 'usuario2', 'contraseña2', 2),
('usuario3@example.com', 'usuario3', 'contraseña3', 3);