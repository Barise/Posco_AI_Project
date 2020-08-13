use popang;

drop table product;

CREATE TABLE `popang`.`pod` (
  `podID` INT NOT NULL,
  `binID` INT NOT NULL,
  `emptinessScore` INT NULL,
  `expectedQuantity` INT NULL,
  `imageFrame` VARCHAR(300) NULL,
  PRIMARY KEY (`podID`, `binID`));

create table `popang`.`product`(
`asin` varchar(100) not null,
`podID` float references pod(podID),
`binID` float references pod(binID),
`height` float not null,
`length` float not null,
`width` float not null,
`quantity` int not null,
`weight` float not null,
`name` varchar(300) not null,
  primary key(asin)
) COMMENT='회원정보';


INSERT INTO `popang`.`product` (`asin`, `podID`, `binID`, `height`, `length`, `width`, `quantity`, `weight`, `name`) VALUES ('B003JNZWIU', '1', '1','2.7', '12.2', '8.9', '1', '2.8',  'Mueller Underwrap');
INSERT INTO `popang`.`product` (`asin`, `podID`, `binID`, `height`, `length`, `width`, `quantity`, `weight`, `name`) VALUES ('B019GAUUAE', '1', '1', '5.3', '11.9', '8.1', '1', '2.7', '6 PACK- BR30');
INSERT INTO `popang`.`product` (`asin`, `podID`, `binID`, `height`, `length`, `width`, `quantity`, `weight`, `name`) VALUES ('B0073E3Q7A', '1', '2', '0.4', '7.9', '4.6', '7', '0.02', 'Lodge Manufacturing SCRAPERGPK Grill Pan Scraper, 2-Pack');
INSERT INTO `popang`.`product` (`asin`, `podID`, `binID`, `height`, `length`, `width`, `quantity`, `weight`, `name`) VALUES ('B00ATZJ5YS', '1', '2', '1.8', '7.4', '4.9', '1', '0.1', 'Belkin 3-Outlet SurgePlus Mini Travel Swivel Charger Surge Protector with Dual USB Ports (2.1 AMP / 10 Watt), BST300');
INSERT INTO `popang`.`product` (`asin`, `podID`, `binID`, `height`, `length`, `width`, `quantity`, `weight`, `name`) VALUES ('B00PAXDQVM', '1', '2', '1.1', '6.9', '1.3', '1', '0.02', 'Revitalash Advanced Eyelash Conditioner 2.0 mL 0.068 oz');


select * from pod;
select * from product;


