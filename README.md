# Project Requirements 🚀

## Technologies to Use 🛠️

1. **Ant Design**
2. **RTK Query / Redux persist**
3. **Sass**
4. **Axios**
5. **Vite**
6. **Typescript**
7. **reactHookForm / Zod**

## Pages 📄

### 8. Login

### 9. Home page -> Sidebar

### 10. Reports -> Edit, Delete -> Her uc role daxil ola bilecek / Projectler olacaq - selectle - Admin create report ede bilmir/edit ve delete ede bilir

### 10. Reports -> EDIT

- ### delete -> Her uc role daxil ola bilecek / Projectler olacaq
- ### selectle
- ### Admin create report ede bilmir/edit ve delete ede bilir

### 11. Team Page -> Yalniz Admin ve Head daxil ola bilecek.

### 12. Projects -> Userler gormur / Admin ve Super Admin yarada biler / ProjectName olacaq

### filter multi select olacag

### 13.

- Users -> name, lastname, username, teamname, status filterler ucun input - Bunu Head ede bilir, User role UserPage daxil ola bilmir /
- Editinde roleid deyismek olar - Bunu ancaq SuperAdmin ede biler.
- Create User -> Username, Name, Lastname, TeamRoleId (Optional), RoleId (select).
- SuperAdmin ve Admin in gore bileceyi resetuserpassword olacaq - eger her hansisa user password unudubsa, o zaman admin ve superadmin girirb hemin usere yeni password teyin edecek.
- bir layiheni yalniz bir defe yaratmaq olar

### 14. Admin, Head, User

-**Head**- ancaq girib baxa bilir, basqa hecne ede bilir,

-**User** - ancaq passwordunu deyise biler, daily reportlar yaza bikir, 24 saat ezrinde update ede biler ancaq, title and desc, delete ede bilir / RoleIdSelect, TeamId = Optional,
projectler filter multi select olacag

-**Admin** - sadece filter -> bitme ve baslama vaxtina gore (Report Page), team, name, lastname, status (User Page) = Ancaq Head ve USer
yarada biler / Edit ve delete ede biler

-**Super Admin** - Admin yarada bilir (sadece super admin ede bilir) - Super Admin Admini sile biler / Admini edit ve delete ede biler.

### 3 MODULES

### 16. Users -> create (name, lastname, username, email, password, teamid = optiontional, roleid), admin edit ve delete ede bilir

### 17. Reports -> title and desc (rich text editor), admin baxa bilir ancaq, User create ede bilir

daily report export (1.button - without filter all of them ; 2.button - with filter just filtered)

**###!!!!!! IMPORTANT !!!!!✔️**

**.env file** olmalidir = repoya push etmek olmaz!! - Gizli Filedir.

**customHook istifade etmirik!!!!**

Navbarda - Change Password Iconu - KeyIcon - changepassword - eger user oz kohne passwordunu xatirlayirsa bunu rahat edecek, eks halda admine ve ya superadmine muracite edecek (Reset Password Hissesi)

**Rollara esasen pagelere direct etmek**
**Headin isi ancaq baxmaqdir**

**!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Suallarim!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!**

#### status nedir ?? --- ishleyib islememeyi employee unemployee

#### super admin userin daily reportlarina mudaxile ede bilirmi ? edit ede bilir mi ? delete ede bilir mi ? -- heleki yox

### her userin reportu ayrica usere gore componentde acilacag ? --- butun userlerin reportlari hamsi birge bir componentde - filtring olacag

### Pojects modulunda neler gorunecek? --- projectler gorunecek

Şirkətin daxili proyektidir. Layihədə 4 rol olacaq.(Super Admin, Admin , Head , Employee ).
4 Moduldan ibarət olacaq.(Employee, Teams, Daily Report, Projects)
Super Admin - Admin, Head, Employee rolları yarada bilir və bütün modulları görə bilir.
Admin - Admin yaratmaqdan başqa bütün rolları yaradır və bütün modulları görə bilir.
Head - Heç Bir əməliyyat görə bilmir, Bütün modulları görüb view edə biləcək.
Employee - Sadəcə Daily Report modulu görə bilir orada yaratdığı reportu yazdığı gün ərzində edit edə bilir və view edə bilir.
userName olmayacaq!
Login -- Mailnen olacaq, Forgetpassword olacaq maile olacaq. mesaj gedcek 5 deyqe vaxti olacaq 5 deyqe erzinde gelen codu inputa daxil edib giriş edecek.
Step 1 - Forget password et.
Step 2 - Maile gelen kodu 6 reqemli otp tipli olacq ve 5 deyqe muddet olacaq.
Step-3 Maile gelen kodu daxil edib next etdikde şifrə təyin etmek modulu olacaq Burda yeni password daxil et ve tekrar et.
Sonra ise herşey okaydısa login.
1.Employees modulu.
1.1 Tabeldə görünən hissələr (Ad, Soyad, Mail, Status aktiv və ya deActiv olması, Teams,Role) və Əməliyyatlar hissəsi olacaq (View, Edit, Delete, Reset Pasword).
1.2 View -hissədə Tabeldə görünən hərşey olacaq və Proyektlər.
1.3 Create - Ad, Soyad, Email, Şifrə, Teams, Role(select). Status yarananda backendden active olaraq gəldiyi üçün create modalında yerləşməyəcək. -- Teams Select olacaq.
1.4 Edit - Ad, Soyad, Email, Şifrə,Role(select), Teams və Status(select formada olacaq active, və ya deActive etmək mümkün olacaq) --Teams Select olacaq.
1.5 Delete - isdifadəçini soft delete edə biləcək.
1.6 Filter - Teams,Project multi select olacaq. Ad və soyad ayrı ayrı input olacaq
2.Teams
2.1 Tabeldə görünən hissələr (Name, )
2.2 View - Tabeldə görünən hərşey olacaq (Employeeleri gore bilecek).
2.3 Create - Teams name və Selectde bütün işçilər gələcək multi formada 1 dən çox işçi seçə biləcək.
2.4 Edit- Teams name və multi select formada işçiləri azalda və ya əlavə artıra bilər.
2.5 Delete - Əgər Teams daxilində employee varsa onu silmək olayacaq error gələcək(Teams daxilində işçi olduğu üçün silmək mümkün olmadı) əgər yoxdursa hardd delete edecek
3.Daily Report.
3.1 Tabeldə görünən hissələr (Employee, Project Name, Created date) notun bir hissəsi sonda noqteler olsun davami oldugu melum alsun diye.
3.2 View - Tabeldə görünən hərşey olacaq və əlavə olaraq notlar olacaq.
3.3 Create- Sadəcə User yarada biləcək. Project Name seçəcək select formada, Note olacaq(Rich text editor)
3.4 Edit- Sadece hemin yaratdigi gun erzginde edit ede bilecek.
3.5 Sadece gore bilecek.
3.6 Filter- Notdan başqa hersey ucun filter olacaq (employe multi select axtaris olacaq)
3.7 Filter Export Excel - Bir button olacaq ustune klik etdikde modal acilacaq hemin modalda filterde yerlesen hersey olacaq ve export edilcek.
4.Projects
4.1 Tabelde Sadece Proyectlerin namesi gorunecek.
4.2 View -- Hissede Project name ve Proyekte daxil olan iscilerin siyahisi gorunecek
4.3 Create- Project name və Employeeleri multi select formada burdan daxil edilcek.
4.4 Edit- Project name və Employeeleri multi select formada burdan daxil edib sile biler.
4.5 Delete- Olmayacaq.
4.6 Filter - Sadece project nameye göre.

const [switch,setSwitch] = useState({
closeAll:true,
view:true,
})

const RenderIf = ({ children, conditions, renderelse }) => {
if (conditions) {
return children
} else if (renderelse) {
return renderelse;
}
};

export default RenderIf;
