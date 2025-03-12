import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type Speaker = {
  id: number;
  name: string;
  role: string;
  affiliation: string;
  image: string;
  bio: string;
  topic: string;
  sessionTime: string;
  tags: string[];
};

const speakers: Speaker[] = [
  {
    id: 1,
    name: 'Dr. Mahesh',
    role: 'Keynote Speaker',
    affiliation: 'Google Research',
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMWFhUXFxoaGBcYGBsYHRgdHh0aFxsdGxsaHSggHRolGxoYITEiJSkrLi4uGh8zODMtNygtLisBCgoKDg0OGxAQGy0lICY3LS0rLy0vLS0tLy0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBFAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAIHAQj/xABBEAABAwIFAQUFBgQFAwUBAAABAgMRACEEBRIxQVEGEyJhcTJCgZGhByNSscHRYnLh8BQzQ1PxgpKyFWNzwtI0/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMBBAUABv/EACwRAAICAQQBAwMDBQEAAAAAAAABAhEDBBIhMUETIlEFYaEygZEUcbHB8EL/2gAMAwEAAhEDEQA/AOj5hlj+KSe9Wlk2U22kBwJUDKS6o+30KEaRBUNRsQUyfM+91IWnu324DrRM6ZmFJNtbSoJSqBNwQFBSRb03qnmuXFzS42Ql9ue7WdiDGptcbtqgSOCEqF0iqaYxhOhmLYLSy+2JCv8AOQPegQHEzbWkCD+JIA3SmpMvzVDjZWr7sokOpWQC0oXIUdoiCFbEEESCDUXeOYj2dTbP4tluDnSN0J/iPiN4AsomQR4RRxaUuTpw6gFISD4nUnYrPupO+gXj2tykWcZhCClxkDWgRp2C0fgPA6pPB8iQYcATh1BhX+WbMrPTfu1H8QEwT7QHJBJLVNWQ2Q4XEJcSFp2PwIIsQRwQZBHBBoZnqR4IMK1AEjfQbHVayNWmfKYIN69zYln7xogFxaEqB2MkJ1D/ANwCw4MJCoAkEWcIlKSPa1e0VXKuPF16RtxtUNXwSuOStjcnZcQUKQnSREARb4V8vZvhu4zF5tkStpxSUJPvjgfzD6ivqVklB7tRJHuKPP8ACT+IdTuOpBr5q7alpjMcS8uFuF1WhoGwtp1Ox8YRzzbcYJKfHwFbceS52SUhp1x5SkrdmXL2A/20HlQ5VtNhyas9tO3RcbLLM+KwjkUgvvKKlKUoqKyVFX4pvNHOy+nUVGNSUkg9BeZ+kc3pj75IvwgpluMWyylaSZUSBfpupI56X84moc2xK1NgkyTcCYEc/WKjzZ4FGqQCCABxFxAjaNxS7jc3UpKkkcAA+hN42uDSFguSlRN0MjnaZTjbadlBISqD7ZFtR6cSeYoNi8eqAUk+LxHzHs38ydJ+VA0PkA3ubVM5i9gNgkD8j+lWYY4wVRQDk2MjOIAUEg3EfC37VG5jJOmbRP1Kh+R+dLzeKVrJncR9IrdvGRpjeNPwk/vRkDW5mGnu9WywSfSSPzB+VHcFmGhJQUyD8Irm6sQpRg3gAf386b21uKQlbY1SBKeZIk1Vz44TW3IrGJ2dL7E4xBLidIKQB/W1RZwiXVLbASDAjrG80hYXFrBkakK26eo86MN50swFcc9arPFkxRSw8pfyEnt57JcdkrK5UlK0q55E+VAGMtUV6VWHE0eweZrcUUGUwZBG1Xy0CCqACBcdfMVE4OStcMieNP3RAGGw5Qsp3A4HNd27LYAsYdCDvcn41zTsvhmu/wC8KhYTpPWmnN+16oIaAgC5m8+VK09YpepPsFRe2wBiuzyVY1xzVAK1Ejreul5Uw2ltPdpCQR0rkTeYrLkrsDfen/J+0AhIJBG1Tp9Qlk3S6IeVT4GPGtyBQ1GpCFFKSSCTHWr+LzJttIW4oJB2mqWBzZLqyGklQi52q7lUZStMZBtKqMZcLidZSUqjY172exTi0r7xOmDY9Re9W14gJISoadW3nWNqIOmLRU417uXyRKVxqi4lU3Fe0MwL4CtAm8wOkUTqzGW5CTKysrKI4qYd9K0pWhQUhQCkqSZCgbggixBFSE9aV8W6nBa8QgwwTLrIE+JRjWyBs4pREt7LJkQqdV9ltT8KxEJbN0sAyOoLqhZZ28A8I/isRUVDXFg/EKbdxjLsfcnwhwpGhxwaigT7wvKFEaQoEJJKhTYKr4llt1Cm1gKSoQR+0XBG4IuCBVDB4lbaww8dSr906f8AVSLwYsHUjce8PEPeCTVAvkJ4rDpcSULEpO/HmCCLggwQRcEA0Obxy2yGF+N0j7siB3iR7yuEke9aDukX0i9iMWltMr5MJAuVHokcnf5E8UOcacCxiVCSBBaTchF4Mj2nEyowLQpQEmCZ/sci8jByCXYWpQINvCAd0pHTryeeAPMG4UnulmSPYUfeT5/xjY9bHkgWmnAoBSSCCAQRcEG4IPSq+ZIBbUYuBKTMQoezB6zb4xRNVygTbGkFOiNRULD9SeAOv618m9tMApvGvoJB0uFMieI3m8xBv15r6uyoS2lROpSgCpUQT8Pd/l4uK4L9sGSoZzElEw+jvFiZ8U6ZHTYUtyqSk/IfFNHP8vwCnCG53PhMTBPpuD0pgy7AnvCwhMJbJJJIlxYkSoifDEgATAM3NFMtwbbIsfGUxI93i38XE8X52r5cye8MGCAedwLVVnqm7SCUWqA2eNJVYEpjYKEHrH99KB4TLFur0IEmaOYrEJJUDKlXAv8A3JJrqvYLsuhllKiAVkAk+e9quTybEkuw8eL1Hb6OcYH7On1SVJIHBt+tC807LOMmCk79K+j2sOkiq2Lyhpc6gKretkTss+ji6PnFPZh4mAmq+JyR5u5QT519A4jL20ggAUJdwjZMFINRHVybphS0cKtWcGumxF6eeyWIKQIJKrDyAFh6VN9ofZ9DZS42I1C9Ufs2aUvEpaN0LkK9I3HmKuZKcbZQiqnQysZohRKFtnSJlaRJB/eZvQMvJlRalUCfFaOI9Z/WulYPs2kFSGx4hck+8DaPWKgPZPDsrJWSQ5JA2hQvAquoJe5BPsQcLj4MKlB8/wB6NYXG+EpUd+aEZm6lb6hACETIHQf1puwXZds4crS5cCRG3p6USkn2jozaZAWgtIKLLAiAYCv60NWtYkpmJuOh5tVVzGFpYQuQZsRsfjV5JJVqmeopWXEpxtckTSkuCMS4gSqDNMHZzCOagFGQVCCOKLdnuyYfQHFeyRYDenrKMobZaSgCY5O9U8elySdeBSht5ZT7RZSH0tNkkDUJPlBJollmWNsJ0tpA6nk+pqTEi7fkr9CKkD3i0xWpFRjJt/YNttUjTGITplYEJvJ4jmqGExiHx92vbcir+MaC0KQeQRS+vBjCJQUm0x61X1c9nuq15DxpNV5JsyJbI0EEjk9fhV3B49wgaki/TihmOU4rxFsgC80Tyl9EC9zVXSZG87XKX/fIWSPsRcdxYBisrTE4sJMFM/KsrVcuf1Fc5E7nCnkFDiyEEEaNRSTNpUpJBnyBgH8VjRjJ+1jwPdPKSpQHhXt3oHMbBY94D1FjbnbeNA9qamVi2lCCSOQeQeCDwapX4NGk+aOst9qByg/Cp8RnjC24dnTY8gggyCki4UDEEXmIrlOGx3hJK9iBb3p2gTv1Gw5IF6tDFEwSoW2EzHn5q8/lF562iNkH4Oldmc3QtAcdcC3/ABJVNtEH2UpMabBJJ96x2iGNrHoVyK4qjEuIV3iLmIUn8Y4/6hwedjxBJrPVKggSD0tNT6sl0R6GNnS8Tik4YKcn7kmVJG6VKMSkc6lESkcmRuausIKyFrtylAM6fMnYq9LDidzyV/PSoFBcUEEXg7+h6Cxnn03K5X2uX7K3BqG9oChwoeR6cGRRes/KFvT/AAzojn3RKh7BMqH4TyoeR5+fWeP/AG1BAxjTjh+7DOwPicOqyUevKuB5xT2jtUAJ1BQH9/0pNzXs5hceore1IeQogkK2BumBJGki8CwMgbGueSL76B/p5coSsvxKl6ioDVYhPASLAJHQCvXcGVOJcQYvKidkjn9o52pjV2FUlyWsQIH4hJ+dKHajMMRhnA2kI0EWi5J97UeoNun6hjgpStHSjKMfcgVgctKse22J0lwG+4TOq/mK79l1hoHT+lcV7G4hTuNYUsQo6gfOEkj6D6U45127DCy0ynWU2JPUbiOnnzU5VOWRL4RYwyjHG2/J0ppmea3W14htt/WuMN9v8fqu1pQbiQR+Z2+VO+VZ4p9vvE78jp5Uufs7GwW/oYMSyi8m9AsWhM2UB8a5x2mzjErdUhtxSROwv16f3ahBwLhE/wCNRrO6CpZ+twPpUwwxfLZ0sso8JWP3bHBFxi4JUkSkjpvSd2Ax5axaVhBUQFjSIlUpItPQ3+FMfYdbqiWX160CCk725GrkXBFDMkwasHmSlBAcCXtF5gIUQNX82lQA9TVtuoMp7HOa45OsZFnKHNTlu8RZxA3G35TQDtzirBVxpJKY96RcfM1PlDAbxD7y0gJcTq33PT0FVc8xQdZBUnwzv+/0qus25KhiwcyX8CBgNS7mElSiVT+Ef1tV5OdPALaT4Uo8IA5nrXrrSUnUR7O56gX/ADqfLymASB417Hcjz9K6eTaugMmP04JvtnmYtg6FEkkJlQPBtHxqupwh+AbxPltV3MoWBxKtxxF/jR/IME0tpUpT3huDyRtHkKKM7xpsQ+YplTs12qxGGNvZO6TdJHB8j6fWun9nu1rOJhB8DhHsnY/ynn03rmWISEqiBFdbw2TsKZSgtII0jgccz186nBlnKTRFprk2VmOl0NOp06idC/dV5TwqOPlVsGVHyAv60qdq0Kw+HVqWHGbCHLqT0hW5g7Tfzql2N7TgHu8Q5IIGhZ58ietNbd0+g9i22h4aE80Mz4akkbFJkfC9F2wOKQM1OKcdd0EKT3hSBtEGKXmheOvkjHzKxnXmCXGyFeGRFDyUJJ0qnpQTEY1aGTqGlaDcdRUGGzNCk2JBPN6xtRLLCaclf3HUqpFrEB8qJ1b9a8rZt0QPHNZWc82S+gvTQh9psubS0h1uClRsRsf6+XFAG2NU7ADdRsE8XP6bnYSa6D27ytAR3glIJlwAgAkbKM2CtgVcjqYhAecJEbJBskbDiT1VHJ+EC1ekaoOLs8dVCdLdk+9Niv16AbhPleeBDubJQrSUq9RzRVIpaW6O9U2uYKvDAkgm1huZ6c+tMxpSfIOSTj0FG88b4WoetGkvqQNC1HUsyRHsjos8FVvD/wB1yBS44lGFV7q3/dIuhvosEjxr6e6ne52c+yWVjEupQs2IlXU9fnNRl241ZONufDNsJgnHPEEkgcwar48qbIToOr3esm0RzO0V13CYJOGCWiPujZCz7pPuLPT8Kj/KbwVI/wBoSwHG1tiJSoJc2taSgee2vpMbzSots60BxikklNhpN4M3G8nkgyOgvvuYl5wlMFBOpNjeyhyD+Y6H1NV8twZIUpImPaSOR1H8Q+ot0oFhWwVOKXZtCrkbq5CU/wAR+gufNqXkFy8DmO0NimYURMGQCLgQTvsZI6RSXm2GxeIWpxaEnoUn8/UR8hVTF5gpaysjTYQkbBIEAJ8gK3y3HFWpZKkNIgrWD8kpHK1cD4mwp0Y10hEp7uGwv2Iy1acQ0VgpcDiVhMeygShUnYFWsHTvCZtTLm+UONrKmGgdSidaohPxM+e3A4mQB7G52XcY3bSghQCRfSQk6R1Nhvzeuw4JgKT44I6GkZb38lzTuOw5G7lTinZfxCVDxBCUDxn8OqJ26C+9+aeuyOUlgqTJIUjkcxfcAxO00wvIwrErPdpPWBJ8rVLhEgr1REfrS5Jykrr9h6ajF1f7nPGsgBddIQFud6TcwI4EQZF5/OtF9h0qkjDNpJ3JVPnNh1prx7ZbelvTqUTIPMAkbHyqLLu1iXAEuN92o7TcH0P6UCco+RjSlzSYKyrIkYcpAF9pk/rQzEYZKsa44lR8XhWn3dSUoAIPXf6UzY7MkjePKlDCYwNl9xwEgrVFjcxFjtM05STx0JmqyfsZi8yK1pavKPemwj9KvYzT3dlhSSkK8idx+lLeWsrdLjhB0SEg7X3v5RA+NW8ZiAhAQpKvFcAcf2aBVGW0QpVKvyV51MpQd1qMnyBv9agcwZ1KuQEpCRG89aJ4XCHxRBmEJB4PtE/OimXBLbnduATpv5md6Z5IzbstUugY7ly0MJXN4i/XmrGWvqRdQ8MQDO52Iq12lx3eISUJJbSSNQ9nUOB1NNnYTKmnsI2pxMnUSJuN701QU4pIr5I7VTE1glUnibfma7Zkx+5b/lH5Un5h2eBdIaACekU5ZazobSmdhFTgg4SdifAC+0RgLwigdpB+opVaylIwYVp9lFjG8CnPtoknDKA3t+dB8ElasOErI06Ntj5UOp7RZwdFbsrnjye7bcVqC2ypPURFp6Xq52axQUhZJ8RdcMf9RpYyXMENLYLgslCk/l+1W+yWK1uL0iElayPIFVvzro3J0/kjJUeiz25xBSGykbqg1Sy9AcSIgEb1P23Nmv5/0NCMAs94YVEjag1uK4Pb2gcGRoOHKlG4IrK8bzxlIAcbJUNzE15TMej0jirnz/dFSWq1G50o/kh7dYFSsKVvEFciEC6GxIsJ9pUWKyJ6BIkVzHQU2O3B6eR8vP59af8A7QO2DV8M0kOGfGqfCCOB1NKuHw3eBJAI1DmkZJrd9jWx45KFsHoRQTEYBCFl58GCZbbBIU4RySLoakXVudk8kOrWXhBCTBJ2noN4T70W3sJG8xSjnOEUrELElRmZPNHhdSF5VcQXjJeX3hu5aQBAgWASOAAAAkcDyrqH2cCMQj+Q/pXN8RgVpKbbkbV07sXhVpebSSUkg+KBIHMTurzi0gm+86hbkkRi9ts6XmTYfQvDjZSSlxW4SCNo95RB9naDfcBSF2/Sp1bKCj71AIUkXEQIUnqgxY9ZBuDXTGGAhISkQB/ZJPJJuSbmlvtMxL7Kkq0qCVgGJF4lKhykwLW2kVE/bjsCHMqFPsvg4bXqtEzPFqTcdpW8tI2bBEmRMmbJ4Gw6mJO8DpfZ7D6wVEQmZCTyZ3M8A7A+pvEImMy8KxGMHIkgj0/I9K6brGrJXM2hYzJCHNKWv8wkBATuTwKG9oHQVhDZBbQIGmAgr/1FJgXlXJuQAdoFQ4hf+GT4JLjyJDhEaG1SkhN/bMEFXSQNyaG4Z+PCr2Tv5eYm1qtqPBVl8DN2CaWrGthv2oUfWAYB8iYHxrrP/r+lu4IIBkHiJBB8wQR8KRfs6PdZo1hki4Ci4siCs92SkAcJAMwbzvsAKuZZqU4zEtKJ0h55JT5EkyPr8zVXNFydFvTS2LkIZf2laffU65KoMNp30jlUfiMW/qaIufaFiEuQpk6IHiAOocCUx5Xg8UDyjsu04hTTbim3EeJK0qMLSq4CxO4uJH1p1weR4GEJWnFKIgLhS3BMgkEoM3kiwBhPXcdsFxEuLfJbn+FZz7O+2GKecIZBSPxER5H2unn8qpu5u6ptLAUFLkBKU+Ik8QRzNdNxmCwTCEqawRWoEwXpQI1hQJLniJsALTQdTKApb3doQvSY0iNIiJ9Tyf0qd0YqqOeKb9zbX4/hC0xmbgwyXHidQUpPFykxPztVtjGFzB6QLrK1fHvFH5RSlmGYFxKG4sgBIA5Vz8SaZMKe5b0mPCA2mOV3k+m587VM8dKvlisWROTk/C/IUyfOEIbDSZIAIWv3fW/HAqfHZg24jWi+lJJB3B2HxoFl+GDDayq+oQkHpyT57Ct9OpBbFiZJPQ9PgKGSt9dBRj02FMiePchShBJISPqT5GiGT4Q4l1a1KhsmJO6o3A8qV8uC1vHRdGwHnABJ+En5U3B1KQEpEabjiaCftdvkiWTZjqPYR7VJQjCtobSlKSoWGw6xFG/s1xJ/wxFoQsx8b/rSNm+bd6gtlISQQbHrYelGex+dlpsNhMpCiZ9etWfUSW5lSSe2h7dzFDbhCuOfrVhHaRsWmkTPMyU9pITBQsgxyNxXqsMvUClJM32oFmblwwNqof14pL6QeJpL7UYstrW0glMgEHpNXsuzFWHRDgtMilrPcx795Tg2gAfD+zUzknw+wsbqwZ3gSEneCaOfZ7iAp5QAsAT8zQB5slCrbGocjzJzCqUpGkk2IO0U6CT7Byj12tfQVMhX4z+RpfUEKdUnVAixFCs9z5b6kakBOn8JmvcO+Csb7UU0rtAx6okOalJKSJgxNZVHEK8R9aykenH4HC7hsOVrAF5MD1/eugJwoTCQJIAgdBtJ6D6m8ckAOxmWKLL2KQfvAoIZTBJUqy3CEj2ilubG1702KwyXmwlhZ8ZlSxOqAYXM3C5GkgwU7QIiq7x+S5PL/wCQfi8I2R41woEQsboI2I3AA6G0EzMmUvNW1B9UkarSU7EfiA4Hlx8iet4LLAhIShEAeVJfaPIsQcTqQydB0jUdgZj1PoLmixOpcisnK4AWGa9hSz4QoR1UbeFP0k7AfAHpeV5ela0aiQqxC02UgxYp3AAuIMggkEGTKdh8mfccUg4depCk76UlKCZSdIMaTB2tOobg10vLsEpKkEpIiKjJzNUSv0Ow7hMSr/KdADgEgiyXB+JM7eaZlPmIJB9pYU60lJOoEhRAsmRtO2qLxxYniTGdtlbRbbP3phSSIBRB9qT7JiUg9T61TxbSXEtKaFkkjTsUm4UFDhQO/nVjInsKeN1IE4DDlkqUgS2buIFyk/7iev8AEnn2heQpVVhpxWKKRqC0yINiI3kceY610PDMKbBUoQP7gDzmkxhhTeMxCFjSpSSsCZlJnpaxMECwt1kozusQ7FzkZwrHvKdcX3kTqISRYIjwhIHCIAHlFS5fhgyO+dT4gfu21e8oe8of7aTf+I22msXgVLxLiExda5mwABJKlHhIFyatZukOuBTckJSESRBVE+IjiZsOBA4q6pcFWmHvs0dBzNlxa/Edck+8VJNz/FPzqLP8OHMc6y0At17EK8YuGxqJAB9JUtXAEdak+z/IyvEBaiQlMgmJvHTp1mxkDmnnKeziWHncStQU45IASDpQJkgSZJMAeQt1NdhwSyZL8EZMmyHPYhZSpzD4runTpUg6TEwocEdQd/jTpmbzqIWlAJIPiBKTa0GD679Ko9pcsDjm8OEamlchSQAUn+EgJIHUKpabztxo909KSBGlRsNgIncWFKz4ksjj5X+C7p88owUr4fn/AEMj7+JiShIMA3uQDaZM+vzqrm+MS2wZVqUu2/O5+hH15pfxfawFMT8vSI9P3NCNS8QRqJCJ+d7/AFk0Cwrt8BT1DkqTsk7NYMqWHVCwV4fM9fQfn6UfxzqXHkIRGggLn8RPPy2qNtQQJAgJFvhVbsnC2CQmXGx4LSYM/wDjc06PvUpLwKbWPbF+S1hsSjEud2CQ21eT717z8fpUmMxXdhZIClFSgFDaSLn0irbDTOFwrqVmHlq8IF5BiTPlUbWF0qU08jw6DAPIUJ1z50mk30NlKXRY7OYbu29KbqXdXxFvQRUGdZmSpDSTdZKSR0TwKCZepf3jiQS6s92kA2Mjp5CBXRcj7JNNBtT4lwiIPuSJI+fNRKKu2K3Nq/IoYLDL0qcXuuTHSLJo52cUEiFmOpo72oyxtDEpF5E/P9qG9i8O04lXeIklUCeBvUSi5Ro7wbt4woWEMKB1E6pExFQZfjcUvEaXFLLYVeBAj4UYzRthnSQgatUSPLmhmV5yO+dQVgJTcHaSavaGNJor6qKWNS82Wc0WpKByJ3NVMBgVuXSBaSaMZUnWmT4hJ39d6x3wuQPCCOOaRkgvUbDj+kDICO6dSfbJtQhOWuIkBCiDyATTZkakhTgO+rc014QWgRB8qlcEz5OOvrUFAJB6KmimTNKcc0jgTO5+lEO2nZhanC40D1UZgV79n2WuNuqK0mFJFyZ60bFeQdmeVupcPh86yunP4dM+NEn9KygobvK2R5ZhsHgAWlIWVJjWkhQOq5CT0m5NpIm0ACDLMBoBxTa0NuuEDS4YQ8NgF8hR2CwCRaQoDTXMOymOUh1CCT3ThhSZtJ2MdbAT0NdcynAt4hEuthQSsFBO6SmDI6QaVGe9WiV3y+wq3mjeklYLakwFNqHjBOwAE65NgUyDxUmGwylKDrogj2G9+7m0kixcIsSLDYclQl5wnEDFhC3GW0FA0yoj2tbjbYErRcAxKlaQUggeJgYfStIWhQUlQkKSZBHUEb0yiLIcbgQvSoHS4idCxumdx/EgwJSbGByARA3mCp7opHfxOkGUlO3eTuETwbza/tVeeeCQVKMAf8AAckmwHNUDhHCovp0pdIA0mNJQDIQsiTMknUJgnYjfiAjhGNCTeSbqUdyf0HQcVUzBnQS8ggKAlYM6VhI96LhQAgKAJ4giBVjBYoOAiClQ9pCvaSfOLR0IseDUGJUSru0kz7xHujpP4iNugv0nkvaCv1EuAWXQl1QIEShJ3E8qi2ri2w9aVu0mEDmLIuDoBChuk+ISD8SPMEg2NMbY7j2R9z0H+l6dW/L3eLeyu5pJxxIV4S0JULwLmR5kER6zSc8XKNLsdhpSbF/KuxuGcQpSm4K1HWBadJ2VfeblOwPWJok92Ry1tIAYSpZEbm3WSD9KtuEX0eEGJAtMCBPnED4DpVDM31IbMXUbD42/Wr+n+n9SyP8AYp5tX4gv3N8Lh20JCGkJQgbBIj4+Z8zUaFEhwTOlah+SgPQBQHwqMr0hMxNk/H/itcnBSXQoyS4FT6oQk/8AhWquOii3fZTzPDd4iAIUkhSCOFDb15HoaWsYy3iUSUjULKBvpI3F+ORT4803G36+lIucsqZxJcSPA5dQ/X1mdulZv1LSvLH1IfqX5RofT9T6Utk/0v8AyKeJyXSbJHyrdhlXSmx5kEAjkVRThFKMAVhxzt9m28MV0B8VZBHkal7EAoSlYMc/IkEfQVviWZ7wdLVd7KYQhoJO4gj5Ca1vpz9zMv6jGooZs0yJnEaXbpWBIIueuxsqN4ME9aG4vLsV3Q1LDxSFQ4lMLUmJ0lHWeBNhRH/1FGHQFOqCU2FxeegG8+X9a8w2bpW4ru5BIBKVADV5pgnyPx4rUyaTHl56f2MrHqcmJ12vuK+So7vEtE2ShYKh0O6h6zXQsxznvnyjDoLmoA6oISmOpqg+2y9HepGoEEHYgjz59DRIY5GHw5JcCQkyk21OK/D/AMVk6nRzw+7tF/T6mGTjpgPP14hSdbjiYO7aRYGYFzcxW/YjDqWl5Q2Bj0PWl9WdKf1ajpAUohCdjeASTRbs3mRaZfbQLqjTG8xFqqt1EsuVRs27QLTIQSonUJ07g+VQYPCR4whLYJ9pV1GrOEwLi1JAUnfWSq5kb/GrS2wF6QkrVcyrYHyFMxajAoPe+fj/AL/ZW9LLml7f5JMrSrVEkpvKtpqHHYtPe7q8IIq9k7qUOgvKkxYC/wBBUeNwnfPFxCfCr+9qV68Zu+l8FilD2t2DMuxiEuq1KIn60zM5jhigQ4QfWgOAwEYhaOgG/nTVl/Z5uPGAelGm/B0mmLnaPPGUoCEulRUQNM10BnBI7lJAghIiK5d26ypDOgpAEvD5V1hpY7gfy06KK0n7gNiMwgxpm281lUG0FV/OsrqGWcoyBtK8Th0FQTK0zeLTweK7fhG0upCG7Ycbkf6vUJP+3O6ve2FpNcd7M4Ap71TrcqdSlLfigoAUFK4IggJCptpke9B6Hk3aoshDWMR3fgAbWASlzSAPDN5IE6TfeJF6RiSSG3wPKBAgWA2A4objMOWdb7NoCluNwSlyBJICQSl2xukHVyDYiHLO1GFeHheSCOFHSfka2x2YtqCgVgNJH3ip9rnQnruNR6EDkwzciNrLOX/ehD6tikKbR+AKEyerhB9E3A5JI0kdn8U666t1iAyDPcEwlUndB2QswVfhJ3gnUGgZmgpkTM6dEQvVvp0nmLztF5i9cpJq0Q0aZ0CEBTf+aDCSkSqN1AJHtCL6TbncCrCFNhCSgjRuFTM9SSd/MmhmZ5yzhEd7i3UoKrDnz0oG6vMgXPwAHv4lKiSgFKVEKVMiTydOwJ55MXp2DG8jaQrLP01bCeMzlQI7lKVDlalWH8qRdXxKfjSm+w4LJ0rAkwSQqT4iYMzc7kjfirLmDQk6keBXUWn1Gyh61sw/xFwTPTrPpefjWgtLjRU/qZgN5xSTeUn5fUb14nNjIKxrA2Iix/etc6xroOoNodSLpAvfmRvyRYmaAYZ1QTqiCRJHlMeIHYetBkwZcS3wdodj1GLK9k1TGJWIKjNtPiUCkcjgDees3NXcLiAfFHtQPlP/AOqXGCCdSDpUCDHmNjRB/FOlMAhtUHSqJTqPP9D1o8WshNVLhgZdHKDuPKDmgq326f38elAM+xOGXDXfN96DCW0uJKp6QCTP70j5nluMfQFv4lahq0qRMJBkp9kQNx02io8J2Rgg6j1BFiCLi42NM9SadpCNkWqbGnKxIKZsDt0HSjmDwwCSf4SaUG807pQ/xCoXI8UWUDYzAsdrddheA05Tm7TgKUqSqLSD9CNwfWsLW/TnFvJj5XdeUbei+oKVY8nD6vwwazlRS0pShdRJ+Nb5fhQnb0uNx18qNY8SAgWAJJ+VLuf5yjDgNohTp2T+EcFUethufKr/ANKxVhc35/0U/qmW8uxeP9lXt2pKmUNx94VBZAM6QkFP1J/Oo8tbOlBmFJAIPz/WaF4RtbilOOElRuSfoPSmFDekI3jb+4rXSox3K3/YvJdlNxfY+u9ajS6A2qdJmSDcQdx53P1qNV0kc8VWy93xyTYJJ/P9K5rdBxkd1NOJbzLCttJKEJAFgJ3IFwZoTlzpblZVBF58zUmOxinSiY9gXnk8/Kq+CwyXbLOmFA7wN68s47E0zekrgF8kxSQ6tSzKQmwJ5mTUWd564ZS0nRPMX+FR5xgEtEFDgIUOLx5/Oo1SUAnxE81UjFXaAU2ltRTy3FuBVpK/xdKasszdaYCjYb2g0tMYVRVKAZ6CmTLcuVOpe42H70f9MpSUn4BWJ3bJMMXe+LwRY7yYp17O4sOAkdaWn8ZqWhuIvejGQjunFgezP1NXOhj5Eb7TidcSf8ypvs+x2IWpxDrq1IAGkE0T+0XCt6daj74P5Wql9nSlOOPKCfCkACm9IU+WOTEAQKyoMNPi/mNZUkiXgs+RhnJcZCjwpR0gRewvAvafMm5oX9pXbZjEoZThVSqD3kj2BIgTsTPSlnGdoTiEqQ41AMjwquD1gih+VZSlU61RAJKvdSByfpAFySAN6RDj9XZO5sMZbifuS+RqLagAmdKDPKrXO5gWMSrootjs+wioKGS2oDYDWVKO5UtRk3NL72JSRoQCltAIQDvM3Ur+NUX8oGwFVu61KSE+0dh19PPypcop8D4TtcHS8i7ZtMMkpVBMDSfakbAAbkzxUDnafHOPKcYSArSEqUoatIBHgQJAJG5ifESLwKVMrwISrUpaUu7Jk/5c72F+8/8AEefstOU4ZAI1YiwEaUpI/MfpTIrgjI0pcBrKMMlxf+IWQ8uI7xfiIP4Up2RB4outw1VYw6GwQgRq9o7lR8zubWqZI5ra02H0ofdmTny+pP7Ir4zG6W1H8MH8v3qB9y9t1CP1H6j41NimgZBjSQQfQ0KbeVGlRlTfhJ6x7KvQiDVgV0RYzEAJ8NzEn159B+1e4OHADA1TE7/Xeq2PVpWtEEidUTAgiTJ3PIqHJlKJVMRqEW6EzHqKZzXAvzTIO7CRqRMQFEE7Ai0fsat4bFW8NxyP6HY+VZlTOor3I7ogecWEVUybLgnDlbhhSjqBG4sLeYttVLUaJTW6HD/Bd0+tlB7Z8r8ovqUhaFJEQfaBtc8+R+leYFP3cKsQbjaqDgVpCzIGwWNvQ+XrWn+LKbGR6bH+X89O9UseonhezIuPz+xdyaeGZb8b5COaZSh1BCgJHP5/Sg2GyUEFKSUuDZQkEHg23B2KeYpgy7MUqIvc2n9PzqrmStKyRI1CJ2i9/wC/KtbHtyK0ZOXdjlT4B+Y5y+hIaQD3ygCVkWQDMRwpW/kPpQ/A5LBJWSpRMlRMmeSSdzRTCvFwKWoDUC3JAiwhPx3PrVhSY5j96mGNR4oGeRz5shw+GEERx0qfEJJaHJFembfD9f2FeujwKHnT0IfTIWXyLjgbfnQnBvFKXjsZ0Dm6oSPkCo0QbV4gCRcCaFswXNG/jW4r0HgT/wDY/Gl5faqDxvdyWu7i8XSBH/aB+tV9cgxe8fKiKmx4iSZMQkb/ANL1dyfIO88SpSk8Df1NeZnG3K/LNvHGoUwYwDEEyTskfrTBgMjUoDvDA4SP1NEcPgWmDAiY5vNe4/Mk90pQESYj0oVjjHpDFS6NWUoZGmwngXJ+NVXswJmBaK8w+GLzesAyBRbAshDfd6dS4k+XrRpEN/JVwGHlQWdyKZMvAXrPSqyG/Z60QwaANUdahO2S+EJn2hMkYaSb60/nUf2Siz/qPyq79o8f4OOdafzFCfsvxAQH5PT8qsPoR2xrU/ClSPeNZQ5WI1FRTcTWUFh0cjytAXAX6aokj4e96b1VzbMAFKZSIQhUK6rULSojeLgAWHnubHflluU/5qkyn/20n3z/ABEeyP8Aq/DMeX5WXkylxC4hOxQpM7Xggilxj3KRzfFLsHMOwPEoJjrv8BzVvLsRKu+VIZajyLit0tg9VbkjZMnpTpkeRNNJIU2So+1qSCVfy8EeQ+MVrm/Y5LwRoV3QTMISPCNRlRAt4oi/MDgAA4uNnKLQO7O5e6tHfd2YWSolA68hO8eQ+ApzyvJ0p7t4qCkzKYMhR4+R+oojiMxaYQhpgAlKQL7JAFvjW4JKZVEr8RgASTz8oHnFN0kVkzV8csHVtwx7vnhFhxXUb1u2QRv8CN6Hsqj0/sVmIURpVNtt7D4VtyRkxZbcF7D15oPnbagkuIEqT7Q/En9SNx8etEQ9edXx3FUXsXAVMXMQbTNo86FLyg2/DAWeYsK8YNtDRJ40qFvWtMtVbUD7qTHQwRc9SFTHlVLN0lBdREBTbeny0OAx/wBqvkPKr2UCWEpEypUA+gHw49aNS8AOPkPZakJQTa2qebXj6QaF5fgC7946rS0ODaYv+1b4rM0NNeLdVgkXm0GPhaqjDTuIgu+BubNjkdVHmubpk7bSCa8aHUOBpI7ppE7e0pNx8LfWh2b5eAfuhKSjUUEzz7vzBomoaMO7pEQhyB6CNqgzElLrSJ2YV+aN/lSsuKORVJDMeWWN3FhXC4RD2XNLbQErbTExBUUWUFHkqImTzBpVzLHlYTyCUkGbEGDNdCyBI/waLbpB6zNzt1mqmSdlWW2wXm0rXwlQCg35AbT/AMDaTjafV+hN+UbOq0vr44+JCdgEgNu+aSduEEHrV4tgkW92aOdqGmUYdcIQlZSoJ0pANxfYXHlQBh4KKb3Ij9a2MGpWdOS4MfNpngai3Z46LpHMkb+tevCx8/jt0rXFKjSBwR/dq8xC7AT/AHvtVtFR+Sosif02vQnLDKnXDPiWUj+Wb1bx72lKj0Ez58fWhuFxNkIaHIGo7SYHxoM0laTJwxdNofsDliGvGtQJOwq9meLSgAAQDyOaHjTAklUACDzFpPnUTz3eCOAYHnXnG+eDd8cmjy+8QjTdWopN+DepE4aEhCthVnLcFqdC40gCQPpWilS9A2m9CSgzgmylAQi2rnoKJYVgIEfPzqLCpiPIVuo6lTsB9adhS22Kyv3UbDcetWmDddQtcVvhzdwedVl2PYr/AGl//wAg/wDkTSr2OaUe8E6QfrTf9oTRXh20DcuJ/Wh+DyQJSkSZA4qxJ8CYrkxONbb8IVtWVcTlTfIryg5G2ji61pcKi46AJKlcrWegH6mtW88cQmGoaHGkX+KjeaqO4MkEt+MAXj2h1lO/xEireX4YNpGIdSFH/RbOyiPfUP8AbSePeIjYGjUUkKdhI5piG2oddcU8QFe0dTSNwAeFrkKI/CE/iNF8lz5SWnUlZUVqBK1KJUEgARf2byZHWl7LcYoturmXNWpSzuZ6n51Fl4UXklFlTM8Ji5UfIASesUua3Wuh2P289jbjs1S0lK1KK1qHgBvA/Ffidup9DTd2ZxS1YNlS0qB0zflJJ0q/6kwfjSPgOzSsS8H1hYacc8Oq8oTJUDeR4RAtF4HFdJKgVbWNo6DYfWtD6fiUbkuuijrsrlUWRgm8AiTWr5SELKxOkFRHXm1TqaPH7yP3qJQjjyI61oyZRigMjGWEHYW/KL7iqGPVrQFJPiSNhVnMMvKASg/d9Nyne48r0IecCSoo2B0iDuEgIn4xPxokvKBvwwRmWMKmyqbp46cGmPJ3gG0wkkoQZ25i1z7Rt6TSxnCRCnANwZA5tv670f7IvpUyhKVRAE2vI9bcn60ly93A5LjkKYDKSVd894nPjCBwlI6fnRBqCbbCsU4YiT9Kl7rSDANSjjxln7ohQsQeetA+9U5iXVc92Ej4zb8qN4hzS2Tt+fShPZ9P35Udiu3wG/0ocuTZCUvi2Tjhvmo/J0XAp0oSkbJSAPOBFTaCpXkKr4dyRtVnviBJryqnfZ6dqugfjGkNL1aQFqtJuY5idh6Uk5xikDE+Eg+CCfOYPqYAFOWIwpcdC1niEjoNzS12rbCMOgwBCwG4AFjMi3kCfhWhoMtZV/BS1+O8T/kDYhQK4tcVjivDvt0/aqHekKny6TU4VIVzAi9q9LdHmu7AWbvbJ6m/MgdPU/lU+W+0lwiyCIT6Xn5TVJ4lbqjaB4Z9LfKZNFsMU2ANoses8/3+tVr3Sdj0tsUHw+CkqSZki9E8FgPu03sDM0vZUCEgKiyrx1p1y/2DPwFYco7W4/BrRdpMkaAGojoB9KB4YHv1dBc+tFmVKUpy0AbDqYqmhEOr/ln40tjA7hjq5qVxwJBJ6WFVMI8ECTtVHFZhBKj8B+tNhLbAXKNyDmHNk9a1RiIW4KpYfFjSFKNVE5gCXCDzakIc+i3mqNWg9DNasomp8anwt+YmokKvGxp4pFpGGtWVqHlVlTRB845S0pT7YRAVqmTsIlRJgzAAJgbxFEsc4HVuqSSSSYCt490TttFthxWVldPx/wB5Jj0a4XDFOGKiQAslPnaAZ+dbiGlNs+8tSC8RwgwoIB5kQpRH8I4M+VlAu2N8I6+xiUK9kQhHgTFuAT/9R8D1qR5xKQf2+NZWVt6fjEqMfPzkdkTeY9aspxYIuKysowKPHAkAqOwBn4XNI+ashI1twAQJT0nePiDWVlHDsDJ1Yq5rioRoTJJ+SZt84pu7N4cJaRG8Cf0rKylTdSY2C9qGFhd/P0qVyY33t++1ZWVCCkVswX4Y4mosiRqdP8P5mf0FZWVU+oya00qLP0+Keojf3/wPOEsKmURudhWVlecib8uymlYUoqPT5ChPa3GIOGKFDfbygSPyrKyjxSakmvkjJFOMk/g5utXiBq6lyAR+VZWV7SXSPHR7YrYCZM3AJ8JMA3+M/G1MLEhSfDJJ5IgdDHlwKysqkm0m0Wmk2hgZbKSu/hCp+O1MOTva0+hIFe1lYqdmo1TJcArxOA7i1VnRdfUCsrKhdE+SyU/cyeL+tLOLxJcC1beEfnWVlSjpEOaZupLKEA9JqHA4ogRe5FZWVzRA9YtwlKJ6VswBE717WUUeXyc3S4JO8FZWVlNAP//Z',
    bio: 'Dr. Chang leads AI research at Google, focusing on large language models and their applications in real-world scenarios.',
    topic: 'The Future of Large Language Models',
    sessionTime: 'Day 1 - 9:00 AM',
    tags: ['AI', 'Machine Learning', 'NLP'],
  },
  {
    id: 2,
    name: 'Prof. Vaishnavi',
    role: 'Distinguished Speaker',
    affiliation: 'Oxford University',
    image: 'data:image/jpeg;base64,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',
    bio: 'Professor Watson is a pioneer in quantum computing, with groundbreaking work in quantum error correction.',
    topic: 'Quantum Computing: Breaking New Ground',
    sessionTime: 'Day 1 - 2:00 PM',
    tags: ['Quantum Computing', 'Physics', 'Computing'],
  },
  // Add more speakers as needed
];

export function Speakers() {
  const [selectedSpeaker, setSelectedSpeaker] = React.useState<Speaker | null>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % speakers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + speakers.length) % speakers.length);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-dark-200">
      {/* Hero Section */}
      <section className="py-20 bg-primary-50 dark:bg-dark-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Featured Speakers
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Learn from industry leaders and academic experts who are shaping the future of
              technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Speaker Carousel */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative max-w-6xl mx-auto">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="bg-white dark:bg-dark-100 rounded-lg shadow-xl overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={speakers[currentSlide].image}
                    alt={speakers[currentSlide].name}
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="mb-4">
                    <span className="text-primary-600 dark:text-primary-400 text-sm font-medium">
                      {speakers[currentSlide].sessionTime}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                    {speakers[currentSlide].name}
                  </h2>
                  <p className="text-xl text-primary-600 dark:text-primary-400 mb-2">
                    {speakers[currentSlide].role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {speakers[currentSlide].affiliation}
                  </p>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    {speakers[currentSlide].topic}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {speakers[currentSlide].bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {speakers[currentSlide].tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-dark-100/80 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-dark-100"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-dark-100/80 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-dark-100"
            >
              <ChevronRight className="w-6 h-6 text-gray-900 dark:text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* All Speakers Grid */}
      <section className="py-20 bg-gray-50 dark:bg-dark-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            All Speakers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-dark-200 rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform"
                onClick={() => setSelectedSpeaker(speaker)}
              >
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {speaker.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 mb-2">
                    {speaker.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {speaker.affiliation}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {speaker.tags.slice(0, 2).map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaker Modal */}
      <AnimatePresence>
        {selectedSpeaker && (
          <div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedSpeaker(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white dark:bg-dark-100 rounded-lg shadow-xl max-w-2xl w-full overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedSpeaker.image}
                  alt={selectedSpeaker.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedSpeaker(null)}
                  className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-primary-600 dark:text-primary-400 text-sm font-medium">
                    {selectedSpeaker.sessionTime}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  {selectedSpeaker.name}
                </h3>
                <p className="text-xl text-primary-600 dark:text-primary-400 mb-2">
                  {selectedSpeaker.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {selectedSpeaker.affiliation}
                </p>
                <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {selectedSpeaker.topic}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {selectedSpeaker.bio}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedSpeaker.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}