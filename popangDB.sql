use popang;

drop table product;
drop table pod;

CREATE TABLE `popang`.`pod` (
  `id` int auto_increment,
  `podID` varChar(100) NOT NULL,
  `binID` varChar(100) NOT NULL,
  `emptinessScore` varChar(100) NULL,
  `expectedQuantity` int NULL,
  `imageName` VARCHAR(300) NULL,
  PRIMARY KEY (`id`)
  )COMMENT ='pod정보';

create table `popang`.`product`(
`id` int auto_increment,
`productID` varchar(100) not null,
`name` varchar(300) not null,
`quantity` varchar(100) not null,
`podID` varChar(100) references pod(podID),
`binID` varChar(100) references pod(binID),
primary key(`id`)
) COMMENT='회원정보';


-- dummy data : pod
INSERT INTO `popang`.`pod` (`id`, `podID`, `binID`, `emptinessScore`, `expectedQuantity`, `imageName`) VALUES ('1', 'A', '1', '0.1', '5', 'A_1.jpg');
INSERT INTO `popang`.`pod` (`id`, `podID`, `binID`, `emptinessScore`, `expectedQuantity`, `imageName`) VALUES ('2', 'A', '2', '0.1', '2', 'A_2.jpg');
INSERT INTO `popang`.`pod` (`id`, `podID`, `binID`, `emptinessScore`, `expectedQuantity`, `imageName`) VALUES ('3', 'A', '3', '0.1', '1', 'A_3.jpg');
INSERT INTO `popang`.`pod` (`id`, `podID`, `binID`, `emptinessScore`, `expectedQuantity`, `imageName`) VALUES ('4', 'A', '4', '0.1', '1', 'A_4.jpg');
INSERT INTO `popang`.`pod` (`id`, `podID`, `binID`, `emptinessScore`, `expectedQuantity`, `imageName`) VALUES ('5', 'A', '5', '0.1', '2', 'A_5.jpg');
INSERT INTO `popang`.`pod` (`id`, `podID`, `binID`, `emptinessScore`, `expectedQuantity`, `imageName`) VALUES ('6', 'A', '6', '0.1', '3', 'A_6.jpg');
INSERT INTO `popang`.`pod` (`id`, `podID`, `binID`, `emptinessScore`, `expectedQuantity`, `imageName`) VALUES ('7', 'B', '1', '0.3', '9', 'B_1.jpg');
INSERT INTO `popang`.`pod` (`id`, `podID`, `binID`, `emptinessScore`, `expectedQuantity`, `imageName`) VALUES ('8', 'B', '2', '0.3', '12', 'B_2.jpg');
INSERT INTO `popang`.`pod` (`id`, `podID`, `binID`, `emptinessScore`, `expectedQuantity`, `imageName`) VALUES ('9', 'B', '3', '0.3', '2', 'B_3.jpg');
INSERT INTO `popang`.`pod` (`id`, `podID`, `binID`, `emptinessScore`, `expectedQuantity`, `imageName`) VALUES ('10', 'B', '4', '0.3', '2', 'B_4.jpg');
INSERT INTO `popang`.`pod` (`id`, `podID`, `binID`, `emptinessScore`, `expectedQuantity`, `imageName`) VALUES ('11', 'B', '5', '0.3', '2', 'B_5.jpg');
INSERT INTO `popang`.`pod` (`id`, `podID`, `binID`, `emptinessScore`, `expectedQuantity`, `imageName`) VALUES ('12', 'B', '6', '0.3', '3', 'B_6.jpg');
INSERT INTO `popang`.`pod` (`id`, `podID`, `binID`, `emptinessScore`, `expectedQuantity`, `imageName`) VALUES ('13', 'C', '1', '0.5', '1', 'C_1.jpg');
INSERT INTO `popang`.`pod` (`id`, `podID`, `binID`, `emptinessScore`, `expectedQuantity`, `imageName`) VALUES ('14', 'C', '2', '0.5', '7', 'C_2.jpg');
INSERT INTO `popang`.`pod` (`id`, `podID`, `binID`, `emptinessScore`, `expectedQuantity`, `imageName`) VALUES ('15', 'C', '3', '0.5', '6', 'C_3.jpg');
INSERT INTO `popang`.`pod` (`id`, `podID`, `binID`, `emptinessScore`, `expectedQuantity`, `imageName`) VALUES ('16', 'C', '4', '0.5', '2', 'C_4.jpg');
INSERT INTO `popang`.`pod` (`id`, `podID`, `binID`, `emptinessScore`, `expectedQuantity`, `imageName`) VALUES ('17', 'C', '5', '0.5', '3', 'C_5.jpg');
INSERT INTO `popang`.`pod` (`id`, `podID`, `binID`, `emptinessScore`, `expectedQuantity`, `imageName`) VALUES ('18', 'C', '6', '0.5', '1', 'C_6.jpg');
INSERT INTO `popang`.`pod` (`id`, `podID`, `binID`, `emptinessScore`, `expectedQuantity`, `imageName`) VALUES ('19', 'D', '1', '0.7', '6', 'D_1.jpg');
INSERT INTO `popang`.`pod` (`id`, `podID`, `binID`, `emptinessScore`, `expectedQuantity`, `imageName`) VALUES ('20', 'D', '2', '0.7', '3', 'D_2.jpg');
INSERT INTO `popang`.`pod` (`id`, `podID`, `binID`, `emptinessScore`, `expectedQuantity`, `imageName`) VALUES ('21', 'D', '3', '0.7', '4', 'D_3.jpg');
INSERT INTO `popang`.`pod` (`id`, `podID`, `binID`, `emptinessScore`, `expectedQuantity`, `imageName`) VALUES ('22', 'D', '4', '0.7', '1', 'D_4.jpg');
INSERT INTO `popang`.`pod` (`id`, `podID`, `binID`, `emptinessScore`, `expectedQuantity`, `imageName`) VALUES ('23', 'D', '5', '0.7', '1', 'D_5.jpg');
INSERT INTO `popang`.`pod` (`id`, `podID`, `binID`, `emptinessScore`, `expectedQuantity`, `imageName`) VALUES ('24', 'D', '6', '0.7', '3', 'D_6.jpg');
INSERT INTO `popang`.`pod` (`id`, `podID`, `binID`, `emptinessScore`, `expectedQuantity`, `imageName`) VALUES ('25', 'E', '1', '0.9', '1', 'E_1.jpg');
INSERT INTO `popang`.`pod` (`id`, `podID`, `binID`, `emptinessScore`, `expectedQuantity`, `imageName`) VALUES ('26', 'E', '2', '0.9', '2', 'E_2.jpg');
INSERT INTO `popang`.`pod` (`id`, `podID`, `binID`, `emptinessScore`, `expectedQuantity`, `imageName`) VALUES ('27', 'E', '3', '0.9', '3', 'E_3.jpg');
INSERT INTO `popang`.`pod` (`id`, `podID`, `binID`, `emptinessScore`, `expectedQuantity`, `imageName`) VALUES ('28', 'E', '4', '0.9', '0', 'E_4.jpg');
INSERT INTO `popang`.`pod` (`id`, `podID`, `binID`, `emptinessScore`, `expectedQuantity`, `imageName`) VALUES ('29', 'E', '5', '0.9', '5', 'E_5.jpg');
INSERT INTO `popang`.`pod` (`id`, `podID`, `binID`, `emptinessScore`, `expectedQuantity`, `imageName`) VALUES ('30', 'E', '6', '0.9', '1', 'E_6.jpg');

-- dummy data : product
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000001', '칸타타', '1', 'A', '1');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000002', '혁신의 용광로', '1', 'A', '2');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000003', '트리오', '1', 'A', '3');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000004', '둥글레차', '1', 'A', '4');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000005', '화장지', '1', 'A', '5');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000006', '참크래커', '1', 'A', '6');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000001', '칸타타', '1', 'B', '1');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000007', '카스타드', '1', 'B', '1');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000006', '참크래커', '1', 'B', '2');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000002', '혁신의 용광로', '1', 'B', '2');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000009', '빅데이터 전문가의 하둡관리', '1', 'B', '3');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000003', '트리오', '1', 'B', '3');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000010', '텀블러', '1', 'B', '4');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000004', '둥글레차', '1', 'B', '4');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000011', '오예스', '1', 'B', '5');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000005', '화장지', '1', 'B', '5');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000012', '임베디드 안드로이드', '1', 'B', '6');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000031', '오뜨', '1', 'B', '6');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000001', '칸타타', '1', 'C', '1');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000007', '카스타드', '1', 'C', '1');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000004', '둥글레차', '1', 'C', '1');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000020', '가방', '1', 'C', '2');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000009', '빅데이터 전문가의 하둡관리', '1', 'C', '3');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000003', '트리오', '1', 'C', '3');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000010', '텀블러', '1', 'C', '3');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000044', '축구공', '1', 'C', '4');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000012', '임베디드 안드로이드', '1', 'C', '4');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000033', '쇼핑백', '1', 'C', '5');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000023', '땅콩샌드', '1', 'C', '6');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000023', '땅콩샌드', '1', 'C', '6');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000026', '운영체제', '1', 'C', '6');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000027', '삼다수', '1', 'D', '1');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000004', '둥글레차', '1', 'D', '1');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000020', '가방', '1', 'D', '2');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000011', '오예스', '1', 'D', '3');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000011', '오예스', '1', 'D', '3');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000011', '오예스', '1', 'D', '3');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000002', '혁신의 용광로', '1', 'D', '3');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000010', '텀블러', '1', 'D', '3');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000023', '땅콩샌드', '1', 'D', '4');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000007', '카스타드', '1', 'D', '4');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000044', '축구공', '1', 'D', '4');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000036', 'Minute Maid 오렌지', '1', 'D', '4');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000033', '쇼핑백', '1', 'D', '5');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000047', '롤러', '1', 'D', '5');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000022', '푸쉬업 바', '1', 'D', '5');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000026', '운영체제', '1', 'D', '6');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000039', '밀키스', '1', 'D', '6');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000049', '페리오 치약', '1', 'D', '6');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000031', '오뜨', '1', 'D', '6');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000027', '삼다수', '1', 'E', '1');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000028', '드론 DIY 가이드', '1', 'E', '1');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000007', '카스타드', '1', 'E', '1');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000018', '제크', '1', 'E', '1');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000050', '버터링', '1', 'E', '1');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000051', '리눅스에서 R과 하둡을 이용한 빅데이터 처리 분석', '1', 'E', '1');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000020', '가방', '1', 'E', '2');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000011', '오예스', '1', 'E', '3');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000011', '오예스', '1', 'E', '3');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000011', '오예스', '1', 'E', '3');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000022', '푸쉬업 바', '1', 'E', '3');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000002', '혁신의 용광로', '1', 'E', '3');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000010', '텀블러', '1', 'E', '3');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000023', '땅콩샌드', '1', 'E', '3');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000007', '카스타드', '1', 'E', '4');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000007', '카스타드', '1', 'E', '4');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000006', '참크래커', '1', 'E', '4');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000006', '참크래커', '1', 'E', '4');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000018', '제크', '1', 'E', '4');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000003', '트리오', '1', 'E', '4');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000039', '밀키스', '1', 'E', '4');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000009', '빅데이터 전문가의 하둡관리', '1', 'E', '4');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000033', '쇼핑백', '1', 'E', '5');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000034', '정수기용 물통', '1', 'E', '5');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000036', 'Minute Maid 오렌지', '1', 'E', '6');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000012', '임베디드 안드로이드', '1', 'E', '6');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000002', '혁신의 용광로', '1', 'E', '6');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000031', '오뜨', '1', 'E', '6');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000029', '자바의 신1', '1', 'E', '6');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000030', '자바의 신2', '1', 'E', '6');
INSERT INTO `popang`.`product` (`productID`, `name`, `quantity`, `podID`, `binID`) VALUES ('000026', '운영체제', '1', 'E', '6');

show columns from product;

select * from pod;
select * from product;

create view falselist as select pod.podID, pod.binID, pod.expectedQuantity, product.quantity from pod left join (select podID, binID, sum(quantity) as quantity from product group by podID, binID) as product on pod.podID = product.podID and pod.binID = product.binID where pod.expectedQuantity != product.quantity;
create view truelist as select pod.podID, pod.binID, pod.expectedQuantity, product.quantity from pod left join (select podID, binID, sum(quantity) as quantity from product group by podID, binID) as product on pod.podID = product.podID and pod.binID = product.binID where pod.expectedQuantity = product.quantity;

select * from falselist;
select * from truelist;




