// export type Spot = {
//     name: string,
//     state: string,
//     city: string,
//     address1: string,
//     address2: string,
//     star: number,
// udate: {
//     nanoseconds: number,
//     seconds: number,
// },
//     udate2: string,
//     // type: string,
// };

export type Spot = {
    id: number,
    name: string,
    area: string,
    postal_code: string,
    address1: string,
    address2: string,
    address3: string,
    latitude: number,
    longitude: number,
    parking_info: number,
    business_hours: string,
    regular_holiday: string,
    website_url: string,
    photo: string,
    rating: number,
    review: string,
    description: string,
    recommended_point: string,
    created_at: {
        nanoseconds: number,
        seconds: number,
    },
    updated_at: {
        nanoseconds: number,
        seconds: number,
    },
};