import "./App.css";
import React, {useReducer} from "react";
import ItemBox from "./components/ItemBox";
import FilterCartItem from "./components/FilterCartItem";
import NewItem from "./components/NewItem";
import EditItemForm from "./components/EditItemForm";
import CartItems from "./components/CartItems";
import {Routes, Route} from "react-router";
import {Link} from "react-router-dom";


const App = () => {
	const initialState = {
		items: [
			{
			  "id": 1,
			  "price": 10,
			  "name": "Diluc",
			  "category": "Pyro",
			  "weapon": "Claymore",
			  "nation": "Mondstadt",
			  "affiliation": "Dawn Winery",
			  "constellation": "Noctua",
			  "birthday": "0000-04-30",
			  "description": "The tycoon of a winery empire in Mondstadt, unmatched in every possible way.",
			  "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b64a02d8-c982-403f-8e0a-3425f11894b7/df3nmsj-a1286b80-94cb-478b-a284-273f280e59f0.png/v1/fill/w_1280,h_640,strp/diluc_gacha_splash_art_by_nayatnm_df3nmsj-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvYjY0YTAyZDgtYzk4Mi00MDNmLThlMGEtMzQyNWYxMTg5NGI3XC9kZjNubXNqLWExMjg2YjgwLTk0Y2ItNDc4Yi1hMjg0LTI3M2YyODBlNTlmMC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.AzjOyfRi-GbGcH3lk4BSuDMnQnPebSITSaIypc9BEwQ"
			},
			{
			  "id": 2,
			  "price": 65,
			  "name": "Kaedehara Kazuha",
			  "category": "Anemo",
			  "weapon": "Sword",
			  "nation": "Inazuma",
			  "affiliation": "The Crux",
			  "constellation": "Acer Palmatum",
			  "birthday": "0000-10-29",
			  "description": "If one's heart is empty, all under heaven is empty. But if one's heart is pure, all under heaven is pure.",
			  "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5e5896a5-4a79-496a-bea4-81f26cfa2650/den41nx-f734659e-79b4-4fda-93dd-1575e79cd916.png/v1/fill/w_1280,h_785,strp/kazuha_genshin_impact_portrait_render_by_deg5270_den41nx-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Nzg1IiwicGF0aCI6IlwvZlwvNWU1ODk2YTUtNGE3OS00OTZhLWJlYTQtODFmMjZjZmEyNjUwXC9kZW40MW54LWY3MzQ2NTllLTc5YjQtNGZkYS05M2RkLTE1NzVlNzljZDkxNi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.1S44xlxMuIHm6n4steBvn8XEhIOWyx98IjtcvX8JKps"
			},
			{
			  "id": 3,
			  "price": 60,
			  "name": "Zhongli",
			  "category": "Geo",
			  "weapon": "Polearm",
			  "nation": "Liyue",
			  "affiliation": "Liyue Harbor",
			  "constellation": "Lapis Dei",
			  "birthday": "0000-12-31",
			  "description": "A mysterious expert contracted by the Wangsheng Funeral Parlor. Extremely knowledgeable in all things.",
			  "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b64a02d8-c982-403f-8e0a-3425f11894b7/df3nmt5-4c3b474b-d855-441c-b51a-d575e5d86d8c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I2NGEwMmQ4LWM5ODItNDAzZi04ZTBhLTM0MjVmMTE4OTRiN1wvZGYzbm10NS00YzNiNDc0Yi1kODU1LTQ0MWMtYjUxYS1kNTc1ZTVkODZkOGMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Gr7OPEDKHZaiDF_Q3D66bUpJ78agqe01b8ndzoyh8-E"
			},
			{
			  "id": 4,
			  "price": 50,
			  "name": "Yelan",
			  "category": "Hydro",
			  "weapon": "Bow",
			  "nation": "Liyue",
			  "affiliation": "Ministry of Civil Affairs/Yanshang Teahouse",
			  "constellation": "Umbrabilis Orchis",
			  "birthday": "0000-05-31",
			  "description": "A mysterious person who claims to work for the Ministry of Civil Affairs, but comes out as a non-entity on their list. She also claims to work for the Yanshang Teahouse, but only uses it for her true job, an intelligence agent collaborating with Ningguang.",
			  "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b64a02d8-c982-403f-8e0a-3425f11894b7/df3nmj3-d0434380-5f74-4f6a-bfe2-50816fbf9c61.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I2NGEwMmQ4LWM5ODItNDAzZi04ZTBhLTM0MjVmMTE4OTRiN1wvZGYzbm1qMy1kMDQzNDM4MC01Zjc0LTRmNmEtYmZlMi01MDgxNmZiZjljNjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.SicCvTAMnPIAPGJRHxo6new2L_OOIhU_Whchvk_whWM"
			},
			{
			  "id": 5,
			  "price": 40,
			  "name": "Xiao",
			  "category": "Anemo",
			  "weapon": "Polearm",
			  "nation": "Liyue",
			  "affiliation": "Liyue Adeptus",
			  "constellation": "Alatus Nemeseos",
			  "birthday": "0000-04-17",
			  "description": "A yaksha adeptus that defends Liyue. Also heralded as the \"Conqueror of Demons\" and \"Vigilant Yaksha.\"",
			  "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b64a02d8-c982-403f-8e0a-3425f11894b7/df3nmk3-e3cd095c-17a5-4565-bd2c-f52c9a9124e1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I2NGEwMmQ4LWM5ODItNDAzZi04ZTBhLTM0MjVmMTE4OTRiN1wvZGYzbm1rMy1lM2NkMDk1Yy0xN2E1LTQ1NjUtYmQyYy1mNTJjOWE5MTI0ZTEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.b3-oKNvHztjV364M7rPS8fz6ExZBfIfszcmH7L1sw_Q"
			},
			{
			  "id": 6,
			  "price": 25,
			  "name": "Kokomi",
			  "category": "Hydro",
			  "weapon": "Catalyst",
			  "nation": "Inazuma",
			  "affiliation": "Watatsumi Island",
			  "constellation": "Dracaena Somnolenta",
			  "birthday": "0000-02-22",
			  "description": "The Divine Priestess of Watatsumi Island. All of the island's affairs are at this young lady's fingertips.",
			  "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b64a02d8-c982-403f-8e0a-3425f11894b7/df3nmqd-c36a07e7-17b4-4062-af34-b2be3b7a9435.png/v1/fit/w_375,h_280,strp/sangonomiya_kokomi_gacha_splash_art_by_nayatnm_df3nmqd-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY1IiwicGF0aCI6IlwvZlwvYjY0YTAyZDgtYzk4Mi00MDNmLThlMGEtMzQyNWYxMTg5NGI3XC9kZjNubXFkLWMzNmEwN2U3LTE3YjQtNDA2Mi1hZjM0LWIyYmUzYjdhOTQzNS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.0dI-4BNvML6wG0P2e67YHejYxY7016txN0JuFfOWUj4"
			},
			{
			  "id": 7,
			  "price": 100,
			  "name": "Bennett",
			  "category": "Pyro",
			  "weapon": "Sword",
			  "nation": "Mondstadt",
			  "affiliation": "Adventurers' Guild",
			  "constellation": "Rota Calamitas",
			  "birthday": "0000-02-29",
			  "description": "A righteous and good-natured adventurer from Mondstadt who's unfortunately extremely unlucky.",
			  "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/96d4a0a0-1733-4468-94db-d3eade9b3a80/de7pg51-492fc0df-9e80-4e81-a829-844dfde229cb.png/v1/fill/w_1280,h_844,strp/benett__render__webstrika__by_webstrika_de7pg51-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODQ0IiwicGF0aCI6IlwvZlwvOTZkNGEwYTAtMTczMy00NDY4LTk0ZGItZDNlYWRlOWIzYTgwXC9kZTdwZzUxLTQ5MmZjMGRmLTllODAtNGU4MS1hODI5LTg0NGRmZGUyMjljYi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.zZw0Ky0rmmeyB-HIr4aXntEcb6atsYiCyOSHydkT5_E"
			},
			{
			  "id": 8,
			  "price": 75,
			  "name": "Kamisato Ayaka",
			  "category": "Cryo",
			  "weapon": "Sword",
			  "nation": "Inazuma",
			  "affiliation": "Yashiro Commission",
			  "constellation": "Grus Nivis",
			  "birthday": "0000-09-28",
			  "description": "Daughter of the Yashiro Commission's Kamisato Clan. Dignified and elegant, as well as wise and strong.",
			  "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5e5896a5-4a79-496a-bea4-81f26cfa2650/denwb5a-5118901d-01d5-42b6-8884-9af2ae03cb36.png/v1/fill/w_1280,h_785,strp/ayaka_genshin_impact_portrait_render_by_deg5270_denwb5a-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Nzg1IiwicGF0aCI6IlwvZlwvNWU1ODk2YTUtNGE3OS00OTZhLWJlYTQtODFmMjZjZmEyNjUwXC9kZW53YjVhLTUxMTg5MDFkLTAxZDUtNDJiNi04ODg0LTlhZjJhZTAzY2IzNi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.gV84asuCKRzhUD58J0CSQfqq8sNl2ZEiX9982R-DjRM"
			},
			{
			  "id": 9,
			  "price": 90,
			  "name": "Raiden Shogun",
			  "category": "Electro",
			  "weapon": "Polearm",
			  "nation": "Inazuma",
			  "affiliation": "Inazuma City",
			  "constellation": "Imperatrix Umbrosa",
			  "birthday": "0000-06-26",
			  "description": "Her Excellency, the Almighty, Narukami Ogosho, who promised the people of Inazuma an unchanging Eternity.",
			  "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b64a02d8-c982-403f-8e0a-3425f11894b7/df3nmmo-aa7af02d-1e09-4997-a9b6-278464e5cd39.png/v1/fill/w_1280,h_640,strp/shogun_raiden_gacha_splash_art_by_nayatnm_df3nmmo-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvYjY0YTAyZDgtYzk4Mi00MDNmLThlMGEtMzQyNWYxMTg5NGI3XC9kZjNubW1vLWFhN2FmMDJkLTFlMDktNDk5Ny1hOWI2LTI3ODQ2NGU1Y2QzOS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.lJU0c4wKzKpD8u_kJtImEMH2on3NwQnOU4ZWHSd3ntI"
			},
			{
			  "id": 10,
			  "price": 65,
			  "name": "Venti",
			  "category": "Anemo",
			  "weapon": "Bow",
			  "nation": "Mondstadt",
			  "affiliation": "Mondstadt",
			  "constellation": "Carmen Dei",
			  "birthday": "0000-06-16",
			  "description": "One of the many bards of Mondstadt, who freely wanders the city's streets and alleys.",
			  "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b64a02d8-c982-403f-8e0a-3425f11894b7/df3nmlk-029f7f1d-2bbe-4fe3-8036-a17505c5c283.png/v1/fill/w_1280,h_640,strp/venti_gacha_splash_art_by_nayatnm_df3nmlk-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvYjY0YTAyZDgtYzk4Mi00MDNmLThlMGEtMzQyNWYxMTg5NGI3XC9kZjNubWxrLTAyOWY3ZjFkLTJiYmUtNGZlMy04MDM2LWExNzUwNWM1YzI4My5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.-lhWWOKVJfmJmzyrRm5hIc9heRJbQRBXMkXl1RJrV1Q"
			},
			{
			  "id": 11,
			  "price": 5,
			  "name": "Childe",
			  "category": "Hydro",
			  "weapon": "Bow",
			  "nation": "Snezhnaya",
			  "affiliation": "Fatui",
			  "constellation": "Monoceros Caeli",
			  "birthday": "0000-07-20",
			  "description": "Tartaglia, also known as his codename 'Childe'.He is the Eleventh of the Eleven Fatui Harbingers.",
			  "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/945fb980-2c32-42a6-b65c-e78307d4d44f/detpedo-f737af30-0f5a-48d5-ba39-794a6f07e1dd.png/v1/fill/w_1280,h_1280,strp/childe_tartaglia_render_png_by_kodzu05_detpedo-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzk0NWZiOTgwLTJjMzItNDJhNi1iNjVjLWU3ODMwN2Q0ZDQ0ZlwvZGV0cGVkby1mNzM3YWYzMC0wZjVhLTQ4ZDUtYmEzOS03OTRhNmYwN2UxZGQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.qYwSpsAKp3vP40GebANv9dL76xadRDR0HZhYyV-k0Kw"
			},
			{
			  "id": 12,
			  "price": 45,
			  "name": "Tighnari",
			  "category": "Dendro",
			  "weapon": "Bow",
			  "nation": "Sumeru",
			  "affiliation": "Sumeru Akademiya",
			  "constellation": "Vulpes Zerda",
			  "birthday": "0000-12-29",
			  "description": "People who encounter misfortunes in the Avidya Forest are lucky to meet a Forest Watcher named Tighnari.But if you land yourself in trouble due to foolish antics, you might have mixed feelings meeting Tighnari.Tighnari resolves problems quickly and professionally, but at the same time, he will give the other party a stern lecture.",
			  "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b64a02d8-c982-403f-8e0a-3425f11894b7/dfbm2gg-a400968d-e426-4681-870c-6a3fb2e30537.png/v1/fill/w_1280,h_640,strp/tighnari_gacha_splash_art_by_nayatnm_dfbm2gg-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvYjY0YTAyZDgtYzk4Mi00MDNmLThlMGEtMzQyNWYxMTg5NGI3XC9kZmJtMmdnLWE0MDA5NjhkLWU0MjYtNDY4MS04NzBjLTZhM2ZiMmUzMDUzNy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.QRE3Fbgpq7P281iDRbZ_eyEIWz9mvyqC8UsTcWGGmu4"
			},
			{
			  "id": 13,
			  "price": 40,
			  "name": "Hu Tao",
			  "category": "Pyro",
			  "weapon": "Polearm",
			  "nation": "Liyue",
			  "affiliation": "Wangsheng Funeral Parlor",
			  "constellation": "Papilio Charontis",
			  "birthday": "0000-07-15",
			  "description": "The 77th Director of the Wangsheng Funeral Parlor. She took over the business at a rather young age.",
			  "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b64a02d8-c982-403f-8e0a-3425f11894b7/df3nmr0-b4a71089-6eaa-431a-ab2f-d4c083264203.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I2NGEwMmQ4LWM5ODItNDAzZi04ZTBhLTM0MjVmMTE4OTRiN1wvZGYzbm1yMC1iNGE3MTA4OS02ZWFhLTQzMWEtYWIyZi1kNGMwODMyNjQyMDMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.P8IBlLfuxrpyL-F7Ac9TduZsb3bxCSbXxKK0a5pgcNs"
			},
			{
			  "id": 14,
			  "price": 15,
			  "name": "Rosaria",
			  "category": "Cryo",
			  "weapon": "Polearm",
			  "nation": "Mondstadt",
			  "affiliation": "Church of Favonius",
			  "constellation": "Spinea Corona",
			  "birthday": "0000-01-24",
			  "description": "A sister of the church, though you wouldn't know it if it weren't for her attire. Known for her sharp, cold words and manner, she often works alone.",
			  "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b64a02d8-c982-403f-8e0a-3425f11894b7/df3nmpw-b81d362a-d4fe-4a35-ab2e-b39fb6ddcd2f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I2NGEwMmQ4LWM5ODItNDAzZi04ZTBhLTM0MjVmMTE4OTRiN1wvZGYzbm1wdy1iODFkMzYyYS1kNGZlLTRhMzUtYWIyZS1iMzlmYjZkZGNkMmYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.auLI8fvdTNa4JiUt_5ecn2a_w_uQdaN90DyFHbIU-eg"
			},
			{
			  "id": 15,
			  "price": 30,
			  "name": "Albedo",
			  "category": "Geo",
			  "weapon": "Sword",
			  "nation": "Mondstadt",
			  "affiliation": "Knights of Favonius",
			  "constellation": "Princeps Cretaceus",
			  "birthday": "0000-09-13",
			  "description": "A genius known as the Kreideprinz, he is the Chief Alchemist and Captain of the Investigation Team of the Knights of Favonius.",
			  "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b64a02d8-c982-403f-8e0a-3425f11894b7/df3nmuo-f88d4123-1e4a-45aa-bb14-f1f4325c976b.png/v1/fill/w_1280,h_640,strp/albedo_gacha_splash_art_by_nayatnm_df3nmuo-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvYjY0YTAyZDgtYzk4Mi00MDNmLThlMGEtMzQyNWYxMTg5NGI3XC9kZjNubXVvLWY4OGQ0MTIzLTFlNGEtNDVhYS1iYjE0LWYxZjQzMjVjOTc2Yi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.SWw0kFHmhGX-8zZC56iH0QOAzklrSK7YpDGHwyHgr6o"
			}
		  ]
		  ,
		item: "",
		price: "",
		category: "",
		image: "",
		counter: 0,
		cartItem: [],
		editItem: false,
		editItemDetail: [],
		newItemForm: false,
		newItem: false,
		cartTotal: 0,
		editData: {
			id: "",
			name: "",
			price: "",
			category: "",
			image: "",
		},
	};

	const reducer = (state, action) => {
		switch (action.type) {
			case "ADD_ITEM": {
				return {
					...state,
					items: [...state.items, action.payload],
				};
			}
			case "SHOW_NEW_FORM": {
				return {
					...state,
					newItem: action.payload,
				};
			}
			case "SET_CATEGORY": {
				return {
					...state,
					category: action.payload,
				};
			}
			case "SHOW_EDIT_FORM": {
				return {
					...state,
					editItem: action.payload,
				};
			}
			case "EDIT_ITEM_DETAIL": {
				return {
					...state,
					editItemDetail: action.payload,
				};
			}
			case "SAVE_CHANGES": {
				const saveChanges = state.items.map((item) => {
					if (item.id === action.payload.id) {
						return action.payload;
					}
					return item;
				});
				const saveCartChanges = state.cartItem.map((item) => {
					if (item.id === action.payload.id) {
						return {...item, ...action.payload};
					}
					return item;
				});

				return {...state, items: saveChanges, cartItem: saveCartChanges};
			}
			case "DELETE_ITEM": {
				return {
					...state,
					items: state.items.filter((item) => item.id !== action.payload.id),
				};
			}
			case "ADD_TO_CART": {
				const cartCopy = [...state.cartItem];
				const cartIndex = cartCopy.findIndex((item) => {
					return action.payload.id === item.id;
				});
				if (cartIndex <= -1) {
					cartCopy.push({...action.payload, quantity: 1});
				} else {
					cartCopy[cartIndex].quantity = cartCopy[cartIndex].quantity + 1;
				}
				const cartTotal = state.cartTotal + action.payload.price;
				return {...state, cartTotal, cartItem: cartCopy};
			}
			case "INCREMENT_COUNTER": {
				const cartCopy = [...state.cartItem];

				let cartIndex = cartCopy.findIndex((item) => {
					return action.payload.id === item.id;
				});

				cartCopy[cartIndex].quantity = cartCopy[cartIndex].quantity + 1;

				const cartTotal = state.cartTotal + cartCopy[cartIndex].price;

				return {...state, cartItem: [...cartCopy], cartTotal};
			}
			case "DECREMENT_COUNTER": {
				const cartCopy = [...state.cartItem];

				let cartIndex = cartCopy.findIndex((item) => {
					return action.payload.id === item.id;
				});
				cartCopy[cartIndex].quantity = cartCopy[cartIndex].quantity - 1;

				const cartTotal = state.cartTotal - cartCopy[cartIndex].price;

				if (cartCopy[cartIndex].quantity <= 0) {
					cartCopy.splice(cartIndex, 1);
				}

				return {...state, cartItem: [...cartCopy], cartTotal};
			}
			case "DELETE_CART_ITEM": {
				return {
					...state,
					cartItem: state.cartItem.filter((item) => item.id !== action.payload.id),
				};
			}
			default: {
				return state;
			}
		}
	};
	const [state, dispatch] = useReducer(reducer, initialState);

	// checks the category of the item added
	const categories = state.items.reduce((categories, item) => {
		if (!categories.includes(item.category)) {
			categories.push(item.category);
		}
		return categories;
	}, []);

	const filterCategory = (category) => {
		dispatch({type: "SET_CATEGORY", payload: category});
	};

	let filteredItems =
		state.category === ""
			? state.items
			: state.items.filter((item) => {
					return item.category === state.category;
			  });

	const showAddItemForm = () => {
		state.newItem
			? dispatch({type: "SHOW_NEW_FORM", payload: false})
			: dispatch({type: "SHOW_NEW_FORM", payload: true});
	};

	const showEditItemForm = (status, id) => {
		state.editItem
			? dispatch({type: "SHOW_EDIT_FORM", payload: false})
			: dispatch({type: "SHOW_EDIT_FORM", payload: status});

		const indexOfItem = state.items.findIndex((item) => item.id === id);
		const listItems = [...state.items];
		dispatch({type: "EDIT_ITEM_DETAIL", payload: listItems.splice(indexOfItem, 1)});
	};

	const hideNewItemForm = (status) => {
		dispatch({type: "SHOW_NEW_FORM", payload: status});
	};

	const hideEditItemForm = (status) => {
		dispatch({type: "SHOW_EDIT_FORM", payload: status});
	};

	const getCartTotal = () => {
		let cartTotal = 0;
		state.cartItem.map((item) => {
			cartTotal += item.price * item.quantity;
		});
		return cartTotal;
	};

	const totalAmout = getCartTotal();

	const listCartItems = state.cartItem.map((item, index) => (
		<CartItems
			key={index}
			id={item.id}
			name={item.name}
			price={item.price}
			image={item.image}
			weapon={item.weapon}
			nation={item.nation}
			quantity={item.quantity}
			editItem={state.editItem}
			dispatch={dispatch}
		/>
	));

	const listItems =
		filteredItems.length === 0 ? (
			<p>No item available.</p>
		) : (
			filteredItems.map((item, index) => (
				<ItemBox
					key={index}
					id={item.id}
					name={item.name}
					price={item.price}
					image={item.image}
					category={item.category}
					weapon={item.weapon}
					nation={item.nation}
					showEditItemForm={showEditItemForm}
					editItem={state.editItem}
					dispatch={dispatch}
				/>
			))
		);

	return (
		<div className="App">
			<header>
			<h1>SilverHand's Fateless</h1>
				<nav>
					||<Link to="/">Home</Link> ||<Link to="Menu">Menu</Link> ||<Link to="Cart">Cart </Link>||
				</nav>
			</header>
	
			<Routes>
				<Route
					path="/"
					element={
						<div className="home">
							{state.editItem ? (
								<EditItemForm
									details={state.editItemDetail[0]}
									hideEditItemForm={hideEditItemForm}
									dispatch={dispatch}
								/>
							) : (
								""
							)}
							<br />
							<FilterCartItem filterCategory={filterCategory} categories={categories} dispatch={dispatch} />
							<br/>
							{state.newItem ? (
								<NewItem hideNewItemForm={hideNewItemForm} dispatch={dispatch} state={state} />
							) : (
								<button className="AddItemBtn" onClick={showAddItemForm}>
									Add New Item
								</button>
							)}
							<br />
							<div className="ItemList">{listItems}</div>
							<h2>Cart Items:</h2>
							<div className="ItemList">{listCartItems}</div>
						</div>
					}
				/>
				<Route
					path="/Menu"
					element={
						<div className="menu">
							{state.editItem ? (
								<EditItemForm
									details={state.editItemDetail[0]}
									hideEditItemForm={hideEditItemForm}
									dispatch={dispatch}
								/>
							) : (
								""
							)}
							<FilterCartItem filterCategory={filterCategory} categories={categories} dispatch={dispatch} />
							<div className="ItemList">{listItems}</div>
						</div>
					}
				/>
				<Route
					path="/Cart"
					element={
						<div className="cart">
							<h2>In your Cart: {totalAmout}</h2>
							<div className="ItemList">{listCartItems}</div>
						</div>
					}
				/>
			</Routes>
			<br />
			<footer>
				<p>© SilverHands 2022</p>
				<p>
					Photo credits
					<a href="https://genshin.hoyoverse.com/en/" target="_blank">
						Mihoyo's Genshin Impact
					</a>
				</p>
			</footer>
		</div>
	);
};

export default App;
