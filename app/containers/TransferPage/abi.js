const json = [
  {
    "version": "eosio::abi/1.0",
    "types": [{
        "new_type_name": "account_name",
        "type": "name"
      }
    ],
    "structs": [{
        "name": "transfer",
        "base": "",
        "fields": [{
            "name": "from",
            "type": "account_name"
          },{
            "name": "to",
            "type": "account_name"
          },{
            "name": "quantity",
            "type": "asset"
          },{
            "name": "memo",
            "type": "string"
          }
        ]
      },{
        "name": "create",
        "base": "",
        "fields": [{
            "name": "issuer",
            "type": "account_name"
          },{
            "name": "maximum_supply",
            "type": "asset"
          }
        ]
      },{
        "name": "issue",
        "base": "",
        "fields": [{
            "name": "to",
            "type": "account_name"
          },{
            "name": "quantity",
            "type": "asset"
          },{
            "name": "memo",
            "type": "string"
          }
        ]
      },{
        "name": "retire",
        "base": "",
        "fields": [{
            "name": "quantity",
            "type": "asset"
          },{
            "name": "memo",
            "type": "string"
          }
        ]
      },{
        "name": "close",
        "base": "",
        "fields": [{
            "name": "owner",
            "type": "account_name"
          },{
            "name": "symbol",
            "type": "symbol"
          }
        ]
      },{
        "name": "account",
        "base": "",
        "fields": [{
            "name": "balance",
            "type": "asset"
          }
        ]
      },{
        "name": "currency_stats",
        "base": "",
        "fields": [{
            "name": "supply",
            "type": "asset"
          },{
            "name": "max_supply",
            "type": "asset"
          },{
            "name": "issuer",
            "type": "account_name"
          }
        ]
      }
    ],
    "actions": [{
        "name": "transfer",
        "type": "transfer",
        "ricardian_contract": "## Transfer Terms & Conditions\n\nI, {{from}}, certify the following to be true to the best of my knowledge:\n\n1. I certify that {{quantity}} is not the proceeds of fraudulent or violent activities.\n2. I certify that, to the best of my knowledge, {{to}} is not supporting initiation of violence against others.\n3. I have disclosed any contractual terms & conditions with respect to {{quantity}} to {{to}}.\n\nI understand that funds transfers are not reversible after the {{transaction.delay}} seconds or other delay as configured by {{from}}'s permissions.\n\nIf this action fails to be irreversibly confirmed after receiving goods or services from '{{to}}', I agree to either return the goods or services or resend {{quantity}} in a timely manner.\n"
      },{
        "name": "issue",
        "type": "issue",
        "ricardian_contract": ""
      },{
        "name": "create",
        "type": "create",
        "ricardian_contract": ""
      },{
        "name": "retire",
        "type": "retire",
        "ricardian_contract": ""
      },{
        "name": "close",
        "type": "close",
        "ricardian_contract": ""
      }
    ],
    "tables": [{
        "name": "accounts",
        "index_type": "i64",
        "key_names": [
          "currency"
        ],
        "key_types": [
          "uint64"
        ],
        "type": "account"
      },{
        "name": "stat",
        "index_type": "i64",
        "key_names": [
          "currency"
        ],
        "key_types": [
          "uint64"
        ],
        "type": "currency_stats"
      }
    ],
    "ricardian_clauses": [],
    "error_messages": [],
    "abi_extensions": [],
    "variants": []
  }  
]

export default json
