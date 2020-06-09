Select * from P where p.color=(Select P.color from P where p.pn=2);
Select S.Sname, max(SP.qty) from S join SP on S.Sn=SP.Sn where SP.Pn=2 group by S.name
Select SP.Pn, count(SP.Sn) from SP group by SP.Pn having count(SP.Sn)>2
Solution one: 
Select * from P left join SP on SP.pn=P.Pn 
Solution two:
Select * from P where P.Pn in ( 
Select P.Pn from P
Except 
Select SP.Pn from SP
)
Select SP.Sn from SP where SP.Pn in (Select P.Pn from P where P.color = N“آبی”)




Select S.Sname 
from S join SP on SP.Sn=S.Sn 
where SP.Pn=2 and qty=(Select max(SP.qty) from SP where SP.Pn = 2);