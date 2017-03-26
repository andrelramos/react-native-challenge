// class Item extends React.Component {

// }

// Item = Relay.createContainer(Item, {
//   fragments: {
//     store: () => Relay.QL`
//       fragment on HackerNewsAPI {
//         item(id: 8863) {
//           title,
//           score,
//           url
//           by {
//             id
//           }
//         }
//       }
//     `,
//   },
// });