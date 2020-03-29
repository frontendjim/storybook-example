import { Server } from 'miragejs';

export const apiMock = () => {
  return new Server({
    routes() {
      this.get('http://localhost:8080/api/v1/baskets/', () => {
        return [];
      });

      this.get('http://localhost:8080/api/v1/spaces/search', () => {
        return {
          venues: [],
        };
      });

      this.get('http://localhost:8080/api/v1/users/favourites/venues', () => {
        return [];
      });

      this.get('http://localhost:8080/api/v1/users/favourites/spaces', () => {
        return [];
      });

      this.get(
        `http://localhost:8080/api/v1/clients/${window.currentClient}/booking_hosts`,
        () => {
          return [];
        }
      );

      this.get(
        `http://localhost:8080/api/v1/clients/${window.currentClient}/client_services`,
        () => {
          return [];
        }
      );

      this.get('http://localhost:8080/api/v1/users/marketing_options', () => {
        return [];
      });

      this.get('http://localhost:8080/api/v1/spaces/availability', () => {
        return {
          entries: [],
          price_with_vat: 10,
        };
      });

      this.get(
        `http://localhost:8080/api/v1/clients/${window.currentClient}/registered_payment_sources`,
        () => {
          return {
            registered_payment_sources: [
              {
                id: 1,
                name: 'Active Card',
                type: 'RegisteredCard',
                mandate_id: null,
                state: 'pending',
                expiry_date: '11/25',
                number: '**** **** **** 1111',
                client_services: [
                  {
                    id: 1,
                    name: 'Abdominal aortic aneurysm screening',
                    disabled: true,
                  },
                ],
                billing_user_name: 'Saul Goodman',
              },

              {
                id: 2,
                name: 'MD 421111',
                type: 'RegisteredMandate',
                mandate_id: 'MD00084XT229BN',
                expiry_date: null,
                stae: null,
                number: null,
                client_services: [
                  {
                    id: 2,
                    name: 'Allergy',
                    disabled: false,
                  },
                ],
                billing_user_name: 'Saul Goodman',
              },
            ],
          };
        }
      );
    },
  });
};
