use popang;

CREATE TABLE `popang`.`pod` (
  `podID` INT NOT NULL,
  `binID` INT NOT NULL,
  `emptinessScore` INT NULL,
  `expectedQuantity` INT NULL,
  `imageFrame` VARCHAR(300) NULL,
  PRIMARY KEY (`podID`, `binID`));

create table `popang`.`bin`(
`asin` int not null,
`podID` int references pod(podID),
`binID` int references pod(binID),
`height` int not null,
`length` int not null,
`width` int not null,
`quanity` int not null,
`weight` int not null,
`name` varchar(300) not null,
  primary key(asin)
) COMMENT='회원정보';

select * from pod;
select * from bin;