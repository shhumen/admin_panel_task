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

### 13.

- Users -> name, lastname, username, teamname, status filterler ucun input - Bunu Head ede bilir, User role UserPage daxil ola bilmir /
- Editinde roleid deyismek olar - Bunu ancaq SuperAdmin ede biler. /
- Create User -> Username, Name, Lastname, TeamRoleId (Optional), RoleId (select).
- SuperAdmin ve Admin in gore bileceyi resetuserpassword olacaq - eger her hansisa user password unudubsa, o zaman admin ve superadmin girirb hemin usere yeni password teyin edecek.
- bir layiheni yalniz bir defe yaratmaq olar

### 14. Admin, Head, User

-**Head**- ancaq girib baxa bilir, basqa hecne ede bilir,

-**User** - ancaq passwordunu deyise biler, daily reportlar yaza bikir, 24 saat ezrinde update ede biler ancaq, title and desc, delete ede bilir / RoleIdSelect, TeamId = Optional,

-**Admin** - sadece filter -> bitme ve baslama vaxtina gore (Report Page), team, name, lastname, status (User Page) = Ancaq Head ve USer
yarada biler / Edit ve delete ede biler

-**Super Admin** - Admin yarada bilir (sadece super admin ede bilir) - Super Admin Admini sile biler / Admini edit ve delete ede biler.

### 3 MODULES

### 15. Teams -> create (teamname), delete and update

### 16. Users -> create (name, lastname, username, email, password, teamid = optiontional, roleid), admin edit ve delete ede bilir

### 17. Reports -> title and desc (rich text editor), admin baxa bilir ancaq, User create ede bilir

**###!!!!!! IMPORTANT !!!!!✔️**

**.env file** olmalidir = repoya push etmek olmaz!! - Gizli Filedir.

**customHook istifade etmirik!!!!**

Navbarda - Change Password Iconu - KeyIcon - changepassword - eger user oz kohne passwordunu xatirlayirsa bunu rahat edecek, eks halda admine ve ya superadmine muracite edecek (Reset Password Hissesi)

**Rollara esasen pagelere direct etmek**
**Headin isi ancaq baxmaqdir**
